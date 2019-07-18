const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config/config.js')


router.get('/getbook', (request, response) => {
    axios.get(`${config.Back_PATH}/bookList`).then((data) => {
        response.send(data.data);
    })
});
router.post('/addbook', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/addBook`,params).then((data) => {
        response.send(data.data);
    })
});

router.post('/getonebookinfo', (request, response) => {
    const params=request.body;
   axios.post(`${config.Back_PATH}/getOneBookInfo`,params).then((data) => {
        response.send(data.data);
    })
    
});

router.post('/updatebook', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/updateBook`,params).then(() => {
        response.send();
    })
});

router.post('/deletebook', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/deleteBook`,params).then((data) => {
        response.send(data.data);
    })
});

module.exports = router;