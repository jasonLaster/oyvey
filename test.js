const { chromium } = require("playwright");
console.log(`>>> TEST (start)`);
console.log(`>>> TEST (1)`, process.env.PLAYWRIGHT_TEST_BASE_URL);
console.log(`>>> TEST (2)`);

console.log(`>>> TEST (done)`);

(async () => {
  console.log("launching chromium");
  const browser = await chromium.launch({ headless: true });
  console.log("launched chromium");
  const page = await browser.newPage();
  await page.goto(process.env.PLAYWRIGHT_TEST_BASE_URL);
  // other actions...
  console.log("waiting for a");
  await page.waitForSelector("a");
  console.log("found a a");
  await browser.close();
})();
