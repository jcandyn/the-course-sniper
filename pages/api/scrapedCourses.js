const cheerio = require('cheerio') // 1
const puppeteer = require('puppeteer');
const fs = require('fs')
const subject = 'AGD'


export default function handler(req, res){
    const scrap = async () =>{
        const browser = await puppeteer.launch({headless : false});
        const page = await browser.newPage();
    await
    page.goto(`https://selfserv.middlesexcc.edu/Student/Courses/Search?subjects=${subject}`, {waitUntil : 'domcontentloaded'}) // navigate to url and wait for page loading
let spanList;
    const recordList = await page.$$eval('div div',(divs)=>{
        let divsList = []   
        console.log(divs) 
        divs.forEach(div => {
            console.log(div)
                let record = {'country' : '','cases' :'', 'death' : '', 'recovered':''}
                // record.country = div.querySelector('div').innerHTML(); // (tr < th < a) anchor tag text contains country name
                 spanList = Array.from(div.querySelectorAll('h3'), column => column.innerText); // getting textvalue of each column of a row and adding them to a list.
                record.cases = spanList[0];        
                record.death = spanList[1];       
                record.recovered = spanList[2];   
                console.log(record)
                console.log(record.country)
                console.log(record.cases)
                console.log(record.recovered)
                console.log(record.death)
                if(spanList.length >= 0){         
                    divsList.push(record)
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
            console.log(spanList)
        }
    })
};
scrap();
 
}


// export default async function handler(req, res){ // 2
//     const subject = 'AGD'
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     const response = await page.goto(`https://selfserv.middlesexcc.edu/Student/Courses/Search?subjects=${subject}`);
// await page.waitForSelector('.esg-row > .esg-col-xs-7 > span');
//   if (true) { // 3
    // const username = req.body.TWuser


    // console.log('cono')
   

    // try { // 4
    //   const response = await fetch(`https://selfserv.middlesexcc.edu/Student/Courses/Search?subjects=${subject}`)
//        const htmlString = await response.text()
//       const $ = cheerio.load(htmlString)



// let result;
//       $('.esg-row > .esg-col-xs-7 > span').each(function(i, element) {
    
//         // Add the text and href of every link, and save them as properties of the result object
//         var title = $(element).text()
//         // var money = $(element).find(".notranslate").text()
//         var description = $(element).data()
//         //   var link = "https://www.careeronestop.org/" + $(element).find("a").attr("href")
  
//          result = {
//               title: title,
//               description: description
//           }
//           console.log("result: " + result.title)
//           console.log("result: " + result.description)
        

//     })

//     res.status(200).json({ text: result })
  


    //   const searchContext = `.esg-col-xxs-12`
    //   const searchContext = $('.esg-section--margin-top .esg-col-xxs-12')
    //   console.log(searchContext)
    //   console.log($)
    //   const scrapedSubjectName = $(searchContext)
    //     .text()
        // console.log(scrapedSubjectName)
     
    //     // .match(/[0-9]/gi)
    //     // .join('')
       

    //   res.statusCode = 200
    //   return res.json({
    //     subject: subject,
    //     subjectName: scrapedSubjectName,
    //   })
    // } catch (e) { // 5
    //   res.statusCode = 404
    //   return res.json({
    //     subject: subject,
    //     error: `${subject} not found. Tip: Double check the spelling.`,
    //     followerCount: -1,
    //   })
    // }
//   }

