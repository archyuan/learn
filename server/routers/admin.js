const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config/config');




router.post('/login',(request,response)=>{

  
    axios.post(`${config.Back_PATH}/admin/login`,request.body
   
    ).then((data)=>{

        ///设置session
           response.send(data.data);
    });
});












module.exports = router;