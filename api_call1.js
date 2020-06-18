const axios = require('axios');

axios.get('https://api.github.com/').then(jdata => {

    console.log(jdata.data);
});
