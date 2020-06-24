const axios = require('axios');
const csvjson = require('csvjson')
const writeFile = require('fs').writeFile;
let userInfo = [];
let specificUserDetail = [];
let resultData = []
let userInfoFields;
let specificUserFields;


// Customized fields for API call 1
function customUserField(object) {
    userInfoFields = {
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
    userInfo.push(userInfoFields)

}

// Customized fields for API call 2

function specificField(object) {

    specificUserFields = {
        'postId': object.id,
        'title': object.title,
        'body': object.body



    }
    specificUserDetail.push(specificUserFields)

}


// To Create single Object for both the calls

function mergeData(ob1, ob2) {
    let finalRecord = {
        ...ob1,
        ...ob2
    }
    console.log(finalRecord)
    resultData.push(finalRecord)

}

// To convert object to .csv file

function converttoCSV() {
    const csvData = csvjson.toCSV(resultData, {
        headers: 'key'
    });
    writeFile('./test-data1.csv', csvData, (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Success!');
    });
}

// API call1

async function getUsersInfo() {
    try {
        let urlInfo = await axios.get('https://jsonplaceholder.typicode.com/users');


        for (let i = 0; i < Object.keys(urlInfo.data).length; i++) {

            customUserField(urlInfo.data[i])


        }
    }
    catch (error) {
        console.log(error)
    }
}

// API call 2

async function getSpecificUsersInfo() {
    try {

      let parseData =await axios.get('https://jsonplaceholder.typicode.com/posts', {

            params:{
                userId:[1,2,3,4,5,6,7,8,9,10]
            }
        
        })
        
           // let urlData = 'https://jsonplaceholder.typicode.com/posts?userId='
           // urlData = urlData + i;
           // let parseData = await axios.get(urlData)

            for (let i = 0; i < Object.keys(parseData.data).length; i++) {


                specificField(parseData.data[i])

            }
        

    }
    catch (error) {
        console.log(error)
    }
    dataProcess();
}


// to Process the data which is obtained from API calls

function dataProcess() {
    for (let i = 0; i < 10; i++) {
        for (let j = i * 10; j < (i + 1) * 10; j++) {
            mergeData(userInfo[i], specificUserDetail[j])
        }
    }


    converttoCSV()

}

getUsersInfo();
getSpecificUsersInfo();

