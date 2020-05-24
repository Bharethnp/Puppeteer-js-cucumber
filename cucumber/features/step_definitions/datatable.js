const {Given}=require('cucumber');
import {HomePage} from '../../../pages/homePage';



Given("I insert text details", async function(datatable) {

    let text1,text2,text3;

    datatable.rows().forEach(async (row) => {

        text1=row[0];
        text2=row[1];
        text3=row[2];

    });

    let homePage= new HomePage();
    await homePage.details(text1,text2,text3);
    
});