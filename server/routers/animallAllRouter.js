const express = require('express');
const router = express.Router();
const axios = require('axios');




router.get('/listall',(resquest,response)=>{
    axios.get('http://127.0.0.1:8015/testall').then((data)=>{
        response.send(data.data);
    })
});
module.exports = router;

