const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../../config/config.js')


router.get('/getmanager', (request, response) => {
    axios.get(`${config.Back_PATH}/managerList`).then((data) => {
        response.send(data.data);
    })
});

router.post('/addmanager', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/addManager`,params).then(() => {
        response.send();
    })
});

router.post('/getonemanagerinfo', (request, response) => {
    const params=request.body;
   axios.post(`${config.Back_PATH}/getOneManagerInfo`,params).then((data) => {
        response.send(data.data);
    })
    
});

router.post('/updatemanager', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/updateManager`,params).then(() => {
        response.send();
    })
});

router.post('/deletemanager', (request, response) => {
    const params=request.body;
    axios.post(`${config.Back_PATH}/deleteManager`,params).then((data) => {
        response.send(data.data);
    })
});

module.exports = router;