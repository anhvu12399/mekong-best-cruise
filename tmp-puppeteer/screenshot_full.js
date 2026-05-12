const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log("Navigating to Aqua Mekong...");
  await page.goto('https://www.aquaexpeditions.com/cruise-ships/aqua-mekong', { 
    waitUntil: 'networkidle2', 
    timeout: 60000 
  });
  
  console.log("Scrolling to bottom to trigger lazy loaded images...");
  await autoScroll(page);
  
  console.log("Scrolling back to top...");
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  
  // Wait a bit more
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  console.log("Taking full page screenshot...");
  await page.screenshot({ path: 'aqua_mekong_screenshot_full.png', fullPage: true });
  
  console.log("Screenshot saved to aqua_mekong_screenshot_full.png");
  await browser.close();
})();

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}
