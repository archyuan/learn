const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config/config.js')


router.get('/getborrowlist', (request, response) => {
    axios.get(`${config.Back_PATH}/borrowList`).then((data) => {
        response.send(data.data);
    })
});

router.get('/getborrowrequestlist', (request, response) => {
    axios.get(`${config.Back_PATH}/borrowRequestList`).then((data) => {
        response.send(data.data);
    })
});

router.get('/getreturnrequestlist', (request, response) => {
    axios.get(`${config.Back_PATH}/returnRequestList`).then((data) => {
        response.send(data.data);
    })
});

router.post('/agreeborrow', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/agreeBorrow`,params).then(() => {
        response.send();
    })
});

router.post('/refuseborrow', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/refuseBorrow`,params).then(() => {
        response.send();
    })
});

router.post('/agreereturn', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/agreeReturn`,params).then(() => {
        response.send();
    })
});


module.exports = router;