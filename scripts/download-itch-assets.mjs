#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import os from 'os';

const TARGET_DIR = path.resolve('public/characters');
const DEBUG_DIR = path.resolve('scripts/debug');

const ASSETS = [
  { name: 'anankekeirin-3-sprites', url: 'https://anankekeirin.itch.io/3-sprites-free-pack', folder: 'anankekeirin' },
  { name: 'platonic-4-characters', url: 'https://muhammadriza.itch.io/free-visual-novel-sprites-pack', folder: 'platonic' },
  { name: 'potat0master-nozomi', url: 'https://potat0master.itch.io/nozomi', folder: 'potat0master-nozomi' },
  { name: 'xiael-tia', url: 'https://xiael.itch.io/tia-sprite', folder: 'xiael-tia' },
  { name: 'szy-prince', url: 'https://sashaines127.itch.io/exotic-prince-deiti-free-character-for-visual-novelsotomes', folder: 'szy-prince' },
  { name: 'chaotic-bearded', url: 'https://chaoticmana.itch.io/free-character-sprite-asset', folder: 'chaotic-bearded' },
  { name: 'raina-blond', url: 'https://rhine-makes-games.itch.io/blond-girl-character-sprites', folder: 'raina-blond' },
];

async function downloadAsset(browser, asset, index) {
  console.log(`\n📦 [${index + 1}/${ASSETS.length}] ${asset.name}`);
  const context = await browser.newContext({ acceptDownloads: true });
  const page = await context.newPage();

  try {
    await page.goto(asset.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // 截圖除錯
    const shotPath = path.join(DEBUG_DIR, `${asset.name}-page.png`);
    await page.screenshot({ path: shotPath, fullPage: true });

    // 嘗試點擊 Download Now / Get / Download 按鈕
    const downloadSelectors = [
      'a:has-text("Download Now")',
      'a:has-text("Download")',
      'button:has-text("Download")',
      '.buy_row a',
      '[data-game_id] a.download_btn',
      'a[href*="download"]',
    ];

    let clicked = false;
    for (const sel of downloadSelectors) {
      const btn = page.locator(sel).first();
      const visible = await btn.isVisible({ timeout: 3000 }).catch(() => false);
      if (visible) {
        console.log(`   點擊: ${sel}`);
        await btn.click();
        clicked = true;
        break;
      }
    }

    if (!clicked) {
      console.log('   ⚠️ 找不到下載按鈕，嘗試滾動...');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await page.waitForTimeout(1000);

      for (const sel of downloadSelectors) {
        const btn = page.locator(sel).first();
        const visible = await btn.isVisible({ timeout: 3000 }).catch(() => false);
        if (visible) {
          await btn.click();
          clicked = true;
          break;
        }
      }
    }

    if (!clicked) {
      console.log('   ❌ 仍然找不到下載按鈕');
      return;
    }

    await page.waitForTimeout(2000);

    // 跳過捐款
    const noThanks = page.locator('a:has-text("No thanks, just take me to the downloads")').first();
    if (await noThanks.isVisible({ timeout: 5000 }).catch(() => false)) {
      console.log('   跳過捐款提示...');
      await noThanks.click();
      await page.waitForTimeout(2000);
    }

    // 找壓縮檔連結
    const fileLinks = await page.locator('a.upload_file_link, a[href*=".zip"], a[href*=".rar"], a[href*=".7z"]').all();

    if (fileLinks.length === 0) {
      console.log('   ⚠️ 沒有找到壓縮檔連結');
      // 再截一張圖看狀態
      await page.screenshot({ path: path.join(DEBUG_DIR, `${asset.name}-after.png`), fullPage: true });
      return;
    }

    const firstLink = fileLinks[0];
    const text = await firstLink.textContent();
    console.log(`   下載: ${text?.trim() || '檔案'}`);

    const [download] = await Promise.all([
      page.waitForEvent('download', { timeout: 120000 }),
      firstLink.click(),
    ]);

    const dlPath = await download.path();
    console.log(`   ✅ 下載完成: ${path.basename(dlPath)}`);

    // 移動+解壓
    const destDir = path.join(TARGET_DIR, asset.folder);
    fs.mkdirSync(destDir, { recursive: true });
    const destPath = path.join(destDir, path.basename(dlPath));
    fs.copyFileSync(dlPath, destPath);

    if (destPath.endsWith('.zip')) {
      try {
        const { execSync } = await import('child_process');
        execSync(`unzip -o "${destPath}" -d "${destDir}"`, { stdio: 'ignore' });
        console.log(`   📂 已解壓縮到 ${destDir}`);
      } catch {
        console.log(`   ⚠️ 解壓縮失敗，請手動處理`);
      }
    }

  } catch (err) {
    console.log(`   ❌ ${err.message}`);
  } finally {
    await context.close();
  }
}

async function main() {
  console.log('🎨 開始下載 itch.io 免費 VN 素材...');
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  fs.mkdirSync(DEBUG_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  for (let i = 0; i < ASSETS.length; i++) {
    await downloadAsset(browser, ASSETS[i], i);
  }

  await browser.close();
  console.log('\n✅ 全部處理完成！');
  console.log(`📂 檔案位置: ${TARGET_DIR}`);
}

main().catch(console.error);
