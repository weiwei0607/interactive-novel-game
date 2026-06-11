import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://xiael.itch.io/tia-sprite', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  // 點擊 Download
  const downloadBtn = page.locator('a:has-text("Download")').first();
  if (await downloadBtn.isVisible().catch(() => false)) {
    await downloadBtn.click();
    await page.waitForTimeout(2000);
  }

  // 列出所有連結
  const links = await page.locator('a').all();
  console.log(`找到 ${links.length} 個連結:\n`);

  for (const link of links.slice(0, 50)) {
    const href = await link.getAttribute('href').catch(() => null);
    const text = await link.textContent().catch(() => '');
    if (href && (href.includes('zip') || href.includes('download') || text.toLowerCase().includes('download'))) {
      console.log(`TEXT: "${text.trim().slice(0, 60)}"`);
      console.log(`HREF: ${href.slice(0, 120)}`);
      console.log('---');
    }
  }

  await browser.close();
}

main().catch(console.error);
