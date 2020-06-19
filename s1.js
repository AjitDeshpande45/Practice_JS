const request = require('request')

function apiCall(url) {
    return new Promise((resolve, reject) => {
        request({
                url: url,
                json: true,
                headers: {
                    "User-Agent": "Ajit"
                }
            }, 
            (error, response) => {
                if(error) {
                    reject("Request not triggered")
                } else if(response.statusCode == 200) {
                    resolve(response.body)
                } else {
                    reject("URL Failed, Request successful")
                }
            }
        )
    })
}

apiCall('https://api.github.com/gists/public')
.then((body) => {
    allGists = body
    for (let index = 0; index < 3; index++) {
        console.log(allGists[index])
    }
})
.catch(error => {
    console.log(error)
})