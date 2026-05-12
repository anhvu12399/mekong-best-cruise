const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a common desktop resolution
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log("Navigating to Aqua Mekong...");
  await page.goto('https://www.aquaexpeditions.com/cruise-ships/aqua-mekong', { 
    waitUntil: 'networkidle2', 
    timeout: 60000 
  });
  
  // Wait a bit for images to load, cookie banners to settle, etc.
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  console.log("Taking full page screenshot...");
  await page.screenshot({ path: 'aqua_mekong_screenshot.png', fullPage: true });
  
  console.log("Screenshot saved to aqua_mekong_screenshot.png");
  await browser.close();
})();
