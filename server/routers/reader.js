const express = require('express');
const router = express.Router();
const axios = require('axios');



router.post('/login',(req,res)=>{

    let userId = req.body.userid;
    
    axios.post('http://127.0.0.1:8095/reader/login',{
        userid:req.body.userid,
        password:req.body.password
    }).then(({data})=>{
        
        if(data.a=="success"){
         req.session.userid=userId;
        
        }

        res.send(data);
          
        
       
     
       
    })

});


module.exports = router;