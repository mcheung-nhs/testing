var request = require('request');

request.get('https://mcheung-nhs.github.io/testing/json/med.json', function(error, response, body) {
    var r = JSON.parse(body);
    console.log(r.sometext);
})
