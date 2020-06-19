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
async function get_Data(){

    let jdata=await axios.get('https://jsonplaceholder.typicode.com/users');
    let final_json=await jdata.data;
    
    for(let i=0;i<Object.keys(final_json).length;i++)
    {
        let record=flatten_Data(jdata.data[i]);
        flat_jason.push(record);
       // console.log(record);
    }
    let record_Org=flat_jason.filter((ob)=>{                  //.org
        if((ob.website).includes(".org"))
        {
            return ob.website
        } 
    })
    let record_userinfo= flat_jason.map((obj)=>{                // User_info

        let d = new Date();
        return obj['userInfo']= {"first_name": obj.name ,"user_name":obj.username, "Email_id":obj.email,"time_Stamp":d},obj;
    
      })
  let record_Email=flat_jason.filter((ob)=>{
       return ob.email== 'Nathan@yesenia.net'

  })
  let record_Summetion=flat_jason.reduce((a,ob)=>{ // summetion of ids
        return a+ob.id

  },0)
  let record_umail= flat_jason.reduce((a,ob)=>{   // user_id + email
     

    return ob.username+ob.email;
  })

  
   console.log(record_Org);//Only .Org records
   console.log(record_userinfo);// //Userinfo
    console.log(record_Email); // only email email id = Nathan@yesenia.net
  console.log(record_Summetion); // Summetion of id's
  console.log(record_umail)// userid+Email
    


}
get_Data();
