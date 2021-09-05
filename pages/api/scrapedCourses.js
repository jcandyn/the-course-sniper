const cheerio = require('cheerio') // 1
const puppeteer = require('puppeteer');
const fs = require('fs')
const subject = 'AGD'


export default function handler(req, res){
    const scrap = async () =>{
        const browser = await puppeteer.launch({headless : true});
        const page = await browser.newPage();
    await
    page.goto(`https://selfserv.middlesexcc.edu/Student/Courses/Search?subjects=${subject}`, {waitUntil : 'domcontentloaded'}) // navigate to url and wait for page loading
let spanList;
await page.waitForSelector('#course-AGD_212');
    const recordList = await page.$$eval('div div',(divs)=>{
        let divsList = []   
        console.log(divs) 
        divs.forEach(div => {
            console.log(div)
                let record = {'class_name' : '','cases' :'', 'death' : '', 'recovered':''}
                // record.country = div.querySelector('div').innerHTML(); // (tr < th < a) anchor tag text contains country name
                 spanList = Array.from(div.querySelectorAll('h3'), column => column.innerText); // getting textvalue of each column of a row and adding them to a list.
                // record.class_name = spanList[0];        
                // record.death = spanList[1];       
                // record.recovered = spanList[2];   
                // console.log("whole record:" + record)
                // console.log("first entry:" + record.country)
                // console.log("second entry:" + record.cases)
                // console.log("second entry:" + record.recovered)
                // console.log("second entry:" +record.death)
                if(spanList.length > 0){         
                    divsList.push(spanList[0])
                }
            });
        return divsList;
    })
    console.log(recordList)
    // await page.screenshot({ path: 'screenshots/classes.png' }); //screenshot 
    res.status(200).json({ text: recordList })
    browser.close();

    fs.writeFile('middlesexClasses.json',JSON.stringify(recordList, null, 2),(err)=>{
        if(err){console.log(err)}
        else{
            console.log('Saved Successfully!')
            // console.log(spanList)
        }
    })
};
scrap();
 
}

