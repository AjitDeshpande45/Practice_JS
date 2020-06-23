const axios = require('axios');
const csvjson = require('csvjson')
const writeFile = require('fs').writeFile;
let finalData = [];
let finalData1 = [];
let finestDataData = []
let finalJson;
let finalJson1;


// Customized fields for API call 1
function customField(object) {
    finalJson = {
        'Id': object.id,
        'Email': object.email,
        'city': object.address.city,
        'zipCode': object.address.zipcode,
        'website': object.website,
        'Phone': object.phone,
        'Company-name': object.company.name,
        'Company-catchPhrase': object.company.catchPhrase,
        'Company-bs': object.company.bs


    }
    finalData.push(finalJson)

}

// Customized fields for API call 2
function customField1(object) {

    finalJson1 = {
        'postId': object.id,
        'title': object.title,
        'body': object.body



    }
    finalData1.push(finalJson1)

}


// To Create single Object for both the calls

function mergeData(ob1, ob2) {
    let drecord={
        ...ob1,
        ...ob2
    }
    console.log(drecord)
    finestDataData.push(drecord)

}

// To convert object to .csv file

function csvData() {
    const csvData1 = csvjson.toCSV(finestDataData, {
        headers: 'key'
    });
    writeFile('./test-data1.csv', csvData1, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Success!');
    });
}

// API call1
async function getData() {
    try {
        let x1 = await axios.get('https://jsonplaceholder.typicode.com/users');


        for (let i = 0; i <Object.keys(x1.data).length; i++) {

            customField(x1.data[i])


        }
    }
    catch (err) {
        console.log(err)
    }
}

// API call 2
async function getData1() {
    try {


        for (let i = 0; i <= 10; i++) {
            let s = 'https://jsonplaceholder.typicode.com/posts?userId='
            s = s + i;
            let x2 = await axios.get(s)
            //console.log(x2.data)
            for (let i = 0; i < Object.keys(x2.data).length; i++) {

                //console.log(x2.data[i])
                customField1(x2.data[i])

            }
        }
        //console.log(finalData1[99])
    }
    catch (err) {
        console.log(err)
    }
    dataProcess();
}


// to Process the data which is obtained from API calls
function dataProcess() {
    for (let i1 = 0; i1 < 10; i1++) {
        for (let j1 = i1 * 10; j1 < (i1 + 1) * 10; j1++) {
            mergeData(finalData[i1], finalData1[j1])
        }
    }
    
    //console.log(fin)
    csvData()
   // console.log(finalData1[99])
}

getData();
getData1();

