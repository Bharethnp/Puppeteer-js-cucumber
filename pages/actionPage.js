 

async function perform(page){

    await page.waitForNavigation({
        "waitUntil":'domcontentloaded'
    });
    await page.hover("#rso > div:nth-child(1) > div > div.r > a > h3");
    const ele= await page.waitForSelector("#rso > div:nth-child(1) > div > div.r > a > h3");
    await ele.click();
}

module.exports = {perform};