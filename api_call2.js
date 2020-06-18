const axios = require('axios');
var n=[];
function flatten (jsonobj) {
    var newjson = {};
    for (var key in jsonobj) {
      if (typeof jsonobj[key] === 'object' && jsonobj[key] !== null) {
          
      
        var subkey = flatten(jsonobj[key])
        for (var key2 in subkey) {
            
            newjson[key2] = subkey[key2];
            //console.log(key);
        }
      } else {
    
        newjson[key] = jsonobj[key];
      }
    }
    
   // console.log(newjson);
    n.push(newjson)
   // console.log(n);
    return newjson;
  }
axios.get('https://api.github.com/gists/public').then(jdata => {

    //console.log(jdata.data);
    for(var i=0;i<2;i++)
    {
        var x2=flatten(jdata.data[i]);
        console.log(x2);
    }
    
   
});
//console.log(n);