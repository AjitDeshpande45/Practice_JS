const fetch = require("node-fetch");
async function getu(){

    let res=await fetch("https://api.github.com/gists/public");
    
    let data= await res.json();
    let data1= JSON.parse(data);
    return data1;
}
getu().then(data=>{console.log(data)});