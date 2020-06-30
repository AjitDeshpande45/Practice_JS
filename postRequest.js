const axios = require('axios');
const csvjson = require('csvjson')
const fs = require('fs')
const _ = require('lodash');

async function getUsersInfo() {
    const userData = await fetchUserData()
    const specificUserData = await fetchSpecificData(userData)
    const flattenspecificData = flattenPostData(specificUserData)
    const combinedUrlData = specificUserField(userData, flattenspecificData)
    console.log(combinedUrlData)
    converttoCSV(combinedUrlData)
}
async function fetchUserData() {

    const userDataUrl = await axios.get('https://jsonplaceholder.typicode.com/users');
    let flattenUserData = (userDataUrl.data).map((user) => {

        return customUserField(user)
    })
    return flattenUserData
}

function customUserField(object) {
    userInfoFields = {
        'id': object.id,
        'email': object.email,
        'city': object.address.city,
        'zipCode': object.address.zipcode,
        'website': object.website,
        'phone': object.phone,
        'company-name': object.company.name,
        'company-catchPhrase': object.company.catchPhrase,
        'company-bs': object.company.bs
    }
    return (userInfoFields)

}

async function fetchSpecificData(userData) {
   const userSpecificId= userData.map(user=>{

    return user.id
   })
    const userSpecificInfo=await getUserPostData(userSpecificId)
    return userSpecificInfo;
}

async function getUserPostData(userIds) {
    let postsPromises=[]
    const specificData=[]
    const urlPost = 'https://jsonplaceholder.typicode.com/posts'
    for(let i=1;i<=userIds.length;i=i+2)
    {
        for(let j=i ; j <=(i+1) ;j++)
        {

            const response =  postApiFetch(urlPost,j)
            postsPromises.push(response)
            
        }
        const postData = await Promise.all(postsPromises)
       specificData.push(...postData)
        postsPromises.splice(0,postsPromises.length)
        
    }
    

    return specificData
    
}
       
async function postApiFetch(postUrl, userId) {

    try {
        const response = await axios.get(postUrl, {
            params : {
                userId
            }
        })

        return response.data
                
    } catch (error) {
        console.log(error)
        
    }
}

function flattenPostData(specificUserData) {

    let flattenSpecificData = _.flatten(specificUserData)
    return flattenSpecificData
}


function specificUserField(userData, flattenspecificData) {
    let userSpecificData = flattenspecificData.map((specificUser) => {
        let machedData = userData.find((user) => {
            return user.id === specificUser.userId

        })
        let mergedData = mergeObjects(specificUser, machedData)

        return mergedData

    })
    return userSpecificData

}
function mergeObjects(specificUser, machedData) {

        return {
            ...machedData, title: specificUser.title,
            body: specificUser.body,
            post_id: specificUser.id
        }
    

    //return dataMerging;

}
function converttoCSV(finalObject) {
    const csvData = csvjson.toCSV(finalObject, {
        headers: 'key'
    });
    fs.appendFile('./test-data1.csv', csvData, (error) => {
        if (error) {
            console.log(error);
        }

    });
}

getUsersInfo();