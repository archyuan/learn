const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config/config.js')


router.get('/getreader', (request, response) => {
    axios.get(`${config.Back_PATH}/readerList`).then((data) => {
        response.send(data.data);
    })
});

router.post('/getonereaderinfo', (request, response) => {
    const params=request.body;
   axios.post(`${config.Back_PATH}/getOneReaderInfo`,params).then((data) => {
        response.send(data.data);
    })
    
});

router.post('/updatereader', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/updateReader`,params).then(() => {
        response.send();
    })
});

router.post('/deletereader', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/deleteReader`,params).then((data) => {
        response.send(data.data);
    })
});
module.exports = router;