const Player = require('../classes/PlayerClass.js');
const express = require('express');
const fs = require('fs');
const { buildFileForPerson, convertToPlayer, updatePlayer } = require('../helpers/helpers.js');
const router = express.Router();


router.post('/create', (req, res) => {
    try {
        const playerInfo = JSON.parse(req.headers.player); //{ firstName, surname, salary, age, id, strongLeg, position, celebrationSentence }
        const newPlayer = convertToPlayer(playerInfo);
        buildFileForPerson(newPlayer.getId, newPlayer);
        res.json('user created');
        res.end();
    } catch (error) {
        console.log(error);
    }
})

router.get('/get', (req, res) => {
    try {
        const playerId = req.headers.id;
        const playerInfo = JSON.parse(fs.readFileSync(`./Back/Soccer/playersDataBase/${playerId}.json`));
        const player = convertToPlayer(playerInfo);
        res.json(player);
        res.end();
    } catch (error) {
        res.status(404).json(error)
    }
})

router.put('/update', (req, res) => {
    try {
        const playerId = req.headers.id;
        const playerInfo = JSON.parse(req.headers.player);
        const oldPlayer = convertToPlayer(JSON.parse(fs.readFileSync(`./Back/Soccer/playersDataBase/${playerId}.json`)));
        const newPlayer = updatePlayer(oldPlayer, playerInfo);
        buildFileForPerson(playerId, newPlayer);
        res.json('changed successfully');
        res.end();
    } catch (error) {
        console.log(error);
    }
})


// function convertToPlayer(player) {
//     const { firstName, surname, salary, age, id, strongLeg, position, celebrationSentence } = player;
//     const newPlayer = new Player(firstName, surname, salary, age, id, strongLeg, position, celebrationSentence);
//     return newPlayer;
// }

// function updatePlayer(oldPlayer, newPlayer) {
//     console.log(newPlayer);
//     for(const key in oldPlayer) {
//         if(!newPlayer.hasOwnProperty(key)){
//             console.log(oldPlayer[key]);
//             newPlayer[key] = oldPlayer[key];
//         }
//     }
//     return convertToPlayer(newPlayer);
// }

module.exports = router;