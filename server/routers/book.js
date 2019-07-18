const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config/config')


router.post('/search', (req, res) => {

   

    axios.post(`${config.Back_PATH}/book/search`, {
        bookname: req.body.bookname
       
    }).then(({ data }) => {

    
       res.send(data);
    })
});

router.post('/bookisable',(requets,response)=>{
    if(requets.session.userid){
         axios.post(`${config.Back_PATH}/book/isable`,{
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