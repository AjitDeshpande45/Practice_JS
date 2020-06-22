const axios = require('axios');
const csvjson=require('csvjson')
const con=require('/Users/Ajit/Desktop/JS/config')
const writeFile = require('fs').writeFile;
let finalData=[];
let finalJson;
function customField(object){  // To Create Customized Fields
    
  finalJson={
      'Id':object.id,
      'Email':object.email,
      'created_at': object.created_at,
      'total_price':object.total_price,
      'currency':object.currency,
      'total_discounts':object.total_discounts,
      'total_line_items_price':object.total_line_items_price
      

  }
  finalData.push(finalJson)

}
function csvData()   // Conver data to CSV file
{
    const csvData = csvjson.toCSV(finalData, {
        headers: 'key'
    });
    writeFile('./test-data.csv', csvData, (err) => {
        if(err) {
            console.log(err); 
        }
        console.log('Success!');
    });
}

async function makeRequest() {   // API calling

    const config = {
        method: 'get',
        url: 'https://drinkhint.myshopify.com/admin/api/2019-04/orders.json?updated_at_min=2020-06-08&updated_at_max=2020-06-09&limit=100',
        auth:{
            userName: con.use,
	        password: con.pass
        }
    }

   
    let response = await axios(config)
    
    for(let i=0;i<Object.keys(response.data['orders']).length;i++)
    {

           customField(response.data.orders[i])
           

    }
    
    //console.log(ke)
    csvData()
    
}

makeRequest();
