

async function home(page,searchText){

    await page.type("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",searchText);
    await page.keyboard.press('Enter');
}

async function details(page,text1,text2,text3){

    await page.type("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",text1);
    await page.type("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",text2);
    await page.type("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",text3);
}

module.exports = {home,details};