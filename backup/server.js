const express = require('express');
const redis = require('redis');
const app = express();

app.get('/', function(req, res) {
        res.send('Im the backup server');
});

app.listen(82, function()  {
    console.log('Web application is listening on port 5000');
});
