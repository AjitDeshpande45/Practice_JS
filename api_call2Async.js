let axios=require('axios')
function flatten_Data (jsonobj) {
    let newjson = {};
    for (let key in jsonobj) {
      if (typeof jsonobj[key] === 'object' && jsonobj[key] !== null) {
          
      
        let subkey = flatten_Data(jsonobj[key])
        for (let key2 in subkey) {
            
            newjson[key2] = subkey[key2];
            //console.log(key);
        }
      } else {
    
        newjson[key] = jsonobj[key];
      }
    }
    
   // console.log(newjson);
   // console.log(n);
    return newjson;
  }




async function getd(){

    var x=await axios.get('https://api.github.com/gists/public');
    var x1=await x.data;
    for(let i=0;i<2;i++)
    {
        let record=flatten_Data(x.data[i]);
        console.log(record);
    }
}
getd();