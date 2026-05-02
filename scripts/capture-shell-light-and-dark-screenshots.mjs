// Capture light + dark shell screenshots of /vi for visual verification.
// Long descriptive filename per project convention.
import { chromium } from "playwright";

const URL = "http://localhost:3002/vi";
const OUT_LIGHT = "/home/vietcq/ecommua/ecommua/ref/screenshots/shell-light.png";
const OUT_DARK = "/home/vietcq/ecommua/ecommua/ref/screenshots/shell-dark.png";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1246, height: 900 },
  deviceScaleFactor: 2,
});

// Light
const lightPage = await ctx.newPage();
await lightPage.goto(URL, { waitUntil: "networkidle" });
await lightPage.screenshot({ path: OUT_LIGHT, fullPage: true });
console.log("light ->", OUT_LIGHT);
await lightPage.close();

// Dark — pre-set localStorage on origin before navigation
const darkPage = await ctx.newPage();
await darkPage.goto(URL, { waitUntil: "domcontentloaded" });
await darkPage.evaluate(() => localStorage.setItem("ecommua-theme", "dark"));
await darkPage.reload({ waitUntil: "networkidle" });
await darkPage.screenshot({ path: OUT_DARK, fullPage: true });
console.log("dark  ->", OUT_DARK);

await browser.close();
