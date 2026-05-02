// Screenshot homepage in dark mode by setting localStorage before navigation.
import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3002/vi";
const out = process.argv[3] || "/home/vietcq/ecommua/ecommua/ref/screenshots/homepage-rework-dark.png";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1246, height: 3000 } });
const page = await ctx.newPage();
// Set theme before page scripts run
await page.addInitScript(() => {
  try { localStorage.setItem("ecommua-theme", "dark"); } catch {}
  try { localStorage.setItem("theme", "dark"); } catch {}
});
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(3500);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log("saved", out);
