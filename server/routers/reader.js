const express = require('express');
const router = express.Router();
const axios = require('axios');



router.post('/login',(req,res)=>{

    
    axios.post('http://127.0.0.1:8095/reader/login',{
        userid:req.body.userid,
        password:req.body.password
    }).then((data)=>{

        res.send(data.data);
    })

});

module.exports = router;