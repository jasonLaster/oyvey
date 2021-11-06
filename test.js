const { chromium } = require("playwright");
console.log(`>>> TEST (start)`);
console.log(`>>> TEST (1)`, process.env.PLAYWRIGHT_TEST_BASE_URL);
console.log(`>>> TEST (2)`);

(async () => {
  console.log("launching chromium");
  const browser = await chromium.launch({ headless: true });
  console.log("launched chromium");
  const page = await browser.newPage();
  await page.goto(process.env.PLAYWRIGHT_TEST_BASE_URL);
  console.log("waiting for an A");
  await page.waitForSelector("a");
  console.log("found an A");
  await browser.close();
})();

console.log(`>>> TEST (done)`);
