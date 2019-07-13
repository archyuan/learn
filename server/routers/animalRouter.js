const express = require('express');
const router = express.Router();
const axios = require('axios');
// const config = require('../../config/config');
// const log4js = require('log4js');
// const logger = log4js.getLogger();

router.get('/list', (request, response) => {
    // Access BE
    axios.get('http://127.0.0.1:8095/reader/allreader').then((data) => {
        response.send(data.data);
    })
});

router.get('/listall',(resquest,response)=>{
    axios.get('http://127.0.0.1:8095/reader/allreader').then((data)=>{
        response.send(data.data);
    })
});


module.exports = router;