const axios = require('axios');


async function getd()
{
var x1=await axios.get('https://api.github.com/');
    var x=await x1.data;
    console.log(x);
};
getd();