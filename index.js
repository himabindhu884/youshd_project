const puppeteer = require('puppeteer');

async function main() {
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();
  await page.setViewport({width: 1200, height: 720})
  await page.goto('https://app-staging.youshd.com/');
  await page.waitForNavigation();
//   await page.type('#id', puppeteer.username);
//   await page.type('#loginPw', puppeteer.password);
//   await page.click('#OTP');

  const page2 = await browser.newPage();
  await page2.setViewport({width: 1200, height: 720})
  await page2.goto('https://app-staging.youshd.com/dashboard');
  console.log('succesfully completed')
//   await page2.type('#lst-ib', 'Headless Chrome');
}

main()












































