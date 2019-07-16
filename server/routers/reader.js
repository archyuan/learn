const express = require('express');
const router = express.Router();
const axios = require('axios');



router.post('/login', (req, res) => {

    let userId = req.body.userid;

    axios.post('http://127.0.0.1:8095/reader/login', {
        userid: req.body.userid,
        password: req.body.password
    }).then(({ data }) => {

        if (data.a == "success") {
            req.session.userid = userId;
            req.session.save();
            
        }
       res.send(data);
    })
});

router.get('/readerislogin',(request,response)=>{
    if(request.session.userid){
        response.send({'b':'islogin'});
    }else{
        response.send({'b':'nologin'});
    }
});

router.post('/booklendingrecords',(request,response)=>{
   /* let message={};
    message['state']='success';
    if(request.session.userid){
    message['b']='islogin;'
    }else{
        message['b']='nologin';
        //response.send(message);
      
    }*/

    let userId='0';
    if(request.session.userid){
        userId=request.session.userid;
    }
    axios.post('http://127.0.0.1:8095/reader/readercord',{
        userid: userId
    }).then((data)=>{
         // response.send(data.data);
       //  message['data']=data;
        // console.log("express",message.data);
        response.send(data.data);
    });
   
});


module.exports = router;