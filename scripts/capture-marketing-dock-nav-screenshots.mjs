import { chromium } from 'playwright';
const OUT = '/home/vietcq/ecommua/ecommua/ecommua-platform/plans/reports/visuals/dock-v2-260502';
const URL = 'http://localhost:3002/vi';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

async function shot(theme, name, hover) {
  const page = await ctx.newPage();
  await page.addInitScript((t) => {
    try { localStorage.setItem('ecommua-theme', t); } catch {}
  }, theme);
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  if (hover) {
    const target = await page.locator('nav[aria-label="Primary"] a[aria-label="Home"]').first();
    await target.hover();
    await page.waitForTimeout(700);
  }
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: !hover });
  if (hover) {
    // viewport-only crop near dock area is fine since dock fixed bottom
  }
  await page.close();
}

await shot('light', 'light-fullpage', false);
await shot('dark',  'dark-fullpage',  false);
await shot('light', 'light-hover-home', true);
await shot('dark',  'dark-hover-home',  true);

await browser.close();
console.log('done');
