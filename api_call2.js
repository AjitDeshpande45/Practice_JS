const axios = require('axios');
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
axios.get('https://api.github.com/gists/public').then(jdata => {

    //console.log(jdata.data);
    for(let i=0;i<2;i++)
    {
        let record=flatten_Data(jdata.data[i]);
        console.log(record);
    }
    
   
});
//console.log(n);