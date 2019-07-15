const express = require('express');
const router = express.Router();
const axios = require('axios');


router.post('/search', (req, res) => {

   

    axios.post('http://127.0.0.1:8095/book/search', {
        bookname: req.body.bookname
       
    }).then(({ data }) => {

    
       res.send(data);
    })
});

router.post('/bookisable',(requets,response)=>{
    if(requets.session.userid){
         axios.post('http://127.0.0.1:8095/book/isable',{
             userid:requets.session.userid,
             bookid:requets.body.bookid
         }).then((data)=>{
            response.send(data.data);
         })
    }else{
        response.send({"disable":true});
    }
});

module.exports = router;