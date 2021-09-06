const puppeteer = require('puppeteer');
const fs = require('fs')

export default function handler(req, res){
    const scrap = async () =>{
        const browser = await puppeteer.launch({headless : true});
        const page = await browser.newPage();
    await
    page.goto(`https://selfserv.middlesexcc.edu/Student/Courses`, {waitUntil : 'domcontentloaded'}) // navigate to url and wait for page loading
    await page.waitForSelector('#submit-search-form');
    await page.click('#submit-search-form')

let spanList;
let listOfSections;
await page.waitForSelector('.layout-table-cell');
//  await page.click('.esg-collapsible-group__toggle')
// layout-table-cell
    const recordList = await page.$$eval('tbody tr',(divs)=>{
        let divsList = []  
        let sectionList = [] 
        console.log(divs) 
        divs.forEach(div => {
            console.log(div)
                 let record = {'semester' : '','status' :'', 'section_name' : '', 'class_name':'', 'dates' : '',
                'course_format' : '', 'schedule' : '', 'professor' : '', 'availability': '', 'credits' : '',
           'academic_level' : ''}
                // record.country = div.querySelector('div').innerHTML(); // (tr < th < a) anchor tag text contains country name
                 spanList = Array.from(div.querySelectorAll('td'), column => column.innerText);

                 listOfSections = Array.from(div.querySelectorAll('div.layout-table-cell'), column => column.innerText); // getting textvalue of each column of a row and adding them to a list.
                record.semester = listOfSections[0]
                record.status = listOfSections[1]
                record.section_name = listOfSections[2]
                record.class_name = listOfSections[3]
                record.dates = listOfSections[4]
                record.course_format = listOfSections[5]
                record.schedule = listOfSections[6]
                record.professor = listOfSections[7]
                record.availability = listOfSections[8]
                record.credits = listOfSections[9]
                record.academic_level = listOfSections[10]

                if(spanList.length > 0){
                    divsList.push(spanList[0])
                }

                if (listOfSections.length > 0){
                    console.log("eh?" + listOfSections)
                    sectionList.push(record)
                }
            });
        return {divsList,sectionList};
    })
   
    // await page.screenshot({ path: 'screenshots/classes.png' }); //screenshot 
    // res.status(200).json({ text: recordList })
    // browser.close();
    fs.writeFile('middlesexClasses.json',JSON.stringify(recordList, null, 2),(err)=>{
        if(err){console.log(err)}
        else{
            console.log('Saved Successfully!')
            console.log(recordList)
        }
    })
  

  
};
scrap();
 
}

