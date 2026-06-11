#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const TARGET_DIR = path.resolve('public/characters');

const ASSETS = [
  { name: 'anankekeirin-3-sprites', url: 'https://anankekeirin.itch.io/3-sprites-free-pack', folder: 'anankekeirin' },
  { name: 'platonic-4-characters', url: 'https://muhammadriza.itch.io/free-visual-novel-sprites-pack', folder: 'platonic' },
  { name: 'potat0master-nozomi', url: 'https://potat0master.itch.io/nozomi', folder: 'potat0master-nozomi' },
  { name: 'xiael-tia', url: 'https://xiael.itch.io/tia-sprite', folder: 'xiael-tia' },
  { name: 'szy-prince', url: 'https://sashaines127.itch.io/exotic-prince-deiti-free-character-for-visual-novelsotomes', folder: 'szy-prince' },
  { name: 'chaotic-bearded', url: 'https://chaoticmana.itch.io/free-character-sprite-asset', folder: 'chaotic-bearded' },
  { name: 'raina-blond', url: 'https://rhine-makes-games.itch.io/blond-girl-character-sprites', folder: 'raina-blond' },
];

async function login(page) {
  console.log('🔑 登入 itch.io...');
  await page.goto('https://itch.io/login', { waitUntil: 'domcontentloaded', timeout: 30000 });

  await page.fill('input[name="username"]', 'weiwei0607');
  await page.fill('input[name="password"]', ':y4k_rP2C6rWw.d');
  await page.click('button[type="submit"]');

  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2000);

  const url = page.url();
  if (url.includes('/login')) {
    console.log('   ⚠️ 可能仍在登入頁面，檢查錯誤訊息...');
    const error = await page.locator('.error_message, .form_errors').textContent().catch(() => null);
    if (error) console.log(`   錯誤: ${error.trim()}`);
  } else {
    console.log('   ✅ 登入完成');
  }
}

async function downloadAsset(page, asset, index) {
  console.log(`\n📦 [${index + 1}/${ASSETS.length}] ${asset.name}`);

  try {
    await page.goto(asset.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);

    // 多種下載按鈕嘗試
    const selectors = [
      'a:has-text("Download Now")',
      'a:has-text("Download")',
      'button:has-text("Download")',
      '.buy_row a',
      '.game_download a',
      'a[href*="download"]',
    ];

    let clicked = false;
    for (const sel of selectors) {
      const btn = page.locator(sel).first();
      const visible = await btn.isVisible({ timeout: 2000 }).catch(() => false);
      if (visible) {
        await btn.click();
        clicked = true;
        break;
      }
    }
    if (!clicked) {
      console.log('   ❌ 找不到下載按鈕');
      return;
    }

    await page.waitForTimeout(2000);

    // 跳過捐款
    const noThanks = page.locator('a:has-text("No thanks, just take me to the downloads")').first();
    if (await noThanks.isVisible({ timeout: 5000 }).catch(() => false)) {
      await noThanks.click();
      await page.waitForTimeout(2000);
    }

    // 找檔案連結
    const fileLinks = await page.locator('a.upload_file_link').all();
    if (fileLinks.length === 0) {
      console.log('   ⚠️ 沒有找到檔案連結');
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

    const destDir = path.join(TARGET_DIR, asset.folder);
    fs.mkdirSync(destDir, { recursive: true });
    const destPath = path.join(destDir, path.basename(dlPath));
    fs.copyFileSync(dlPath, destPath);

    if (destPath.endsWith('.zip')) {
      try {
        const { execSync } = await import('child_process');
        execSync(`unzip -o "${destPath}" -d "${destDir}"`, { stdio: 'ignore' });
        console.log(`   📂 已解壓縮`);
      } catch {
        console.log(`   ⚠️ 解壓縮失敗`);
      }
    }

  } catch (err) {
    console.log(`   ❌ ${err.message}`);
  }
}

async function main() {
  console.log('🎨 開始下載 itch.io 免費 VN 素材...');
  fs.mkdirSync(TARGET_DIR, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });

  const context = await browser.newContext({
    acceptDownloads: true,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 },
  });

  // 隱藏 webdriver 標記
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  });

  const page = await context.newPage();

  await login(page);

  for (let i = 0; i < ASSETS.length; i++) {
    await downloadAsset(page, ASSETS[i], i);
  }

  await browser.close();
  console.log('\n✅ 全部處理完成！');
  console.log(`📂 檔案位置: ${TARGET_DIR}`);
}

main().catch(console.error);
