const Goalkeeper = require('../classes/GaolkeeperClass');
const express = require('express');
const fs = require('fs');
const { buildFileForPerson, convertToGoalkeeper, updatePlayer } = require('../helpers/helpers.js');
const router = express.Router();


router.post('/create', (req,res) => {
    try {
        const goalkeeperInfo = JSON.parse(req.headers.goalkeeper);
        const newGoalkeeper = convertToGoalkeeper(goalkeeperInfo);
        buildFileForPerson(goalkeeperInfo.id, newGoalkeeper);
        res.json('user created');
        res.end();
    } catch (error) {
        console.log(error) 
    }
})


module.exports = router;