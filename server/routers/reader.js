const express = require('express');
const router = express.Router();
const axios = require('axios');




router.post('/applytoreturn',(request,response)=>{
      axios.post('http://127.0.0.1:8095/reader/applytoreturnbook',{
          bookid:request.body.bookid,
          readerid:request.session.userid
      }).then((data)=>{
             response.send(data.data);
      });
});

router.post('/getbookwithborrowed',(request,response)=>{
    if(request.session.userid){
        ////do some thing
       axios.post('http://127.0.0.1:8095/reader/getbookinfobr',{
           userid:request.session.userid
       }).then((data)=>{
          
           response.send(data.data);
       });
       
    }
})

router.post('/register',(request,response)=>{

      axios.post('http://127.0.0.1:8095/reader/register',request.body).then((data)=>{
                response.send(data.data);              
      });
  

});


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

router.post('/logout', (req, res) => {

    if (req.session.userid) {
        req.session.destroy((err) => {

        });
        res.send({ 'logout': 'success' });
        return;
    }
    res.send({ 'logout': 'success' });
})

router.get('/readerislogin', (request, response) => {
    if (request.session.userid) {
        response.send({ 'b': 'islogin' });
    } else {
        response.send({ 'b': 'nologin' });
    }
});

router.post('/booklendingrecords', (request, response) => {
    /* let message={};
     message['state']='success';
     if(request.session.userid){
     message['b']='islogin;'
     }else{
         message['b']='nologin';
         //response.send(message);
       
     }*/

    let userId = '0';
    if (request.session.userid) {
        userId = request.session.userid;
    }
    axios.post('http://127.0.0.1:8095/reader/readercord', {
        userid: userId
    }).then((data) => {
        // response.send(data.data);
        //  message['data']=data;
        // console.log("express",message.data);
        response.send(data.data);
    });

});

router.post('/applyabook', (request, response) => {
    //申请书籍
    let userId = '0';
    let message = {};
    if (!request.session.userid) {
        message['b'] = 'nologin'
        response.send(message);
        return;

    }
    userId = request.session.userid;
    axios.post('http://127.0.0.1:8095/reader/applyabook', {
        bookid: request.body.bookid,
        readerid: userId
    }).then((data) => {
        message['b'] = 'inlogin';
        message['data'] = data.data;
        response.send(message);
    });

});


module.exports = router;