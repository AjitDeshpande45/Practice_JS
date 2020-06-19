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
    "url": "https://api.github.com/gists/455f9dd68c9b77dc84d5e1fd55b97476",
    "forks_url": "https://api.github.com/gists/455f9dd68c9b77dc84d5e1fd55b97476/forks",
    "files": {
      "PY0101EN-3-3-Functions.ipynb": {
        "filename": "PY0101EN-3-3-Functions.ipynb",
        "type": "text/plain",
        "language": "Jupyter Notebook",
        "raw_url": "https://gist.githubusercontent.com/Shivprasad-Titare/455f9dd68c9b77dc84d5e1fd55b97476/raw/31c8e2c74041ce4bd1663b9086e57e9903378be3/PY0101EN-3-3-Functions.ipynb",
        "size": 39100
      }
    },
    "truncated": false
  }
 
  ];
  var final_doc=[];
  for(var i=0;i<Object.keys(jsondoc).length;i++)
  {
    var final_jason=flatten(jsondoc[i]);
    final_doc.push(final_jason);
  }
console.log(final_doc);