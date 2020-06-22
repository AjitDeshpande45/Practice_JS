let axios=require('axios')
let _=require('underscore')
function flatten_Data (jsonobj) {
    let newjson = {};
    for (let key in jsonobj) {
      if (typeof jsonobj[key] === 'object' && jsonobj[key] !== null) {
          
      
        let subkey = flatten_Data(jsonobj[key])
        for (let key2 in subkey) {
            
            newjson[key2] = subkey[key2];
          
        }
      } else {
    
        newjson[key] = jsonobj[key];
      }
    }
    return newjson;
  }

let flat_jason=[]
async function makeRequest() {

  const config = {
      method: 'get',
      url: 'https://drinkhint.myshopify.com/admin/api/2019-04/orders.json?updated_at_min=2020-06-08&updated_at_max=2020-06-09&limit=100',
      auth:{
          userName: 'd2bef59ee2f59fb782d371bc5bc140b4',
        password: 'e71bfa5a6a5c553d5144a89aa4aad729'
      }
  }
  let res = await axios(config)
  let record=res.data
  for(let i=0;i<Object.keys(record).length;i++)
  {
      let record=flatten_Data(res.data[i]);
      flat_jason.push(record);
     // console.log(record);
  }
 

}
makeRequest();
console.log(flat_jason)