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

module.exports = router;