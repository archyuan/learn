const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config/config');


router.post('/logout',(requset,response)=>{
    if(requset.session.adminid){
        requset.session.destroy();
    }
    response.send({'islogout':'success'});
});

router.post('/login',(request,response)=>{

  
    axios.post(`${config.Back_PATH}/admin/login`,request.body
   
    ).then((data)=>{

        ///设置session
        if(data.data.state=='success'){
            request.session.adminid=request.body.username;
            request.session.adminname=data.data.managername;
        }
           response.send(data.data);
    });
});



router.post('/islogin',(request,response)=>{
    if(request.session.adminid){
        response.send({'islogin':request.session.adminname});
    }else{
        response.send({'islogin':'nologin'});
    }
});








module.exports = router;