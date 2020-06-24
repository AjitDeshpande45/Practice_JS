const axios = require('axios');
const csvjson = require('csvjson')
const fs = require('fs')
let userInfo = [];
let userInfoFields;
let urlPost = 'https://jsonplaceholder.typicode.com/posts'


//-----------------------------------------------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------------------------------
async function getinfo(s, id) {
    let parseData = await axios.get(s, {
        params: {
            userId: id
        }

    })
    
    return parseData.data
}

//-------------------------------------------------------------------------------------------------------------
function converttoCSV(ob) {
    const csvData = csvjson.toCSV(ob, {
        headers: 'key'
    });
    fs.appendFile('./test-data1.csv', csvData, (error) => {
        if (error) {
            console.log(error);
        }
        //console.log('Success!');
    });
}
//-------------------------------------------------------------------------------------------------------------------
function specificField(userInfo, postdata) {


    let re = userInfo.map((user, i) => {
        let flatdata = userInfo[i]

        for (let j = 0; j < Object.keys(postdata[0]).length; j++) {


            if (flatdata.Id == postdata[0][j].userId) {

                flatdata['title'] = postdata[0][j].title,
                    flatdata['postid'] = postdata[0][j].id,
                    flatdata['body'] = postdata[0][j].body
                console.log(flatdata)
               
                let duplicateObject = flatdata
                converttoCSV(duplicateObject)


            }
            
        }

        
    })


    //console.log(convertJson)
    //----------------------------------------------------------------------------------------------------------------------------


}

async function getUsersInfo() {
    try {
        let urlInfo = await axios.get('https://jsonplaceholder.typicode.com/users');


        for (let i = 0; i < Object.keys(urlInfo.data).length; i++) {

            customUserField(urlInfo.data[i])


        }

        let x = userInfo.map(async obj => {

            let apiCall2 = await getinfo(urlPost, obj.id)

            return apiCall2


        })
        const postdata = await Promise.all(x)

        specificField(userInfo, postdata)


    }

    catch (error) {
        console.log(error)
    }


}


getUsersInfo();
