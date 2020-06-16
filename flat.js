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
    
    
    return newjson;
  }
  
  var jsondoc=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      }
    }
    ];
    var final_doc=[];
    for(var i=0;i<Object.keys(jsondoc).length;i++)
    {
      var final_jason=flatten(jsondoc);
      final_doc.push(final_jason);
    }
  console.log(final_doc);