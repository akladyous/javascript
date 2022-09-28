const puppeteer = require('puppeteer');
let url = "https://en.wikipedia.org/wiki/Port_Said";




(async () => {
    let startDate = new Date().getTime();
    console.log("start: ", startDate);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const response = await page.goto(url);
    
    // await page.screenshot({ path: 'example.png' });

    const result = await page.evaluate(() => {
        let paragraphs = document.querySelectorAll('p');
        const articles = [...paragraphs].map(item => item.innerText);
        return articles;
    });

    console.log(result)

    await browser.close();

    let endDate = new Date().getTime();
    console.log("end: ", endDate)
    
    console.log("Execution Time: " , endDate - startDate);    
})();

