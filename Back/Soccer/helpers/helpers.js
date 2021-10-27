const fs = require('fs');
const Goalkeeper = require('../classes/GaolkeeperClass');
const Player = require('../classes/PlayerClass');


function buildFileForPerson(id, person){
    const stringData = JSON.stringify(person);
    fs.writeFileSync(`./Back/Soccer/playersDataBase/${id}.json`, stringData);
}

function convertToPlayer(player) {
    const { firstName, surname, salary, age, id, strongLeg, position, celebrationSentence } = player;
    const newPlayer = new Player(firstName, surname, salary, age, id, strongLeg, position, celebrationSentence);
    return newPlayer;
}

function convertToGoalkeeper(goalkeeper) {
    const { firstName, surname, salary, age, id, isLeftHanded } = goalkeeper;
    const newGoalkeeper = new Goalkeeper(firstName, surname, salary, age, id, isLeftHanded);
    return newGoalkeeper;
}

function updatePlayer(oldPlayer, newPlayer) {
    console.log(newPlayer);
    for(const key in oldPlayer) {
        if(!newPlayer.hasOwnProperty(key)){
            console.log(oldPlayer[key]);
            newPlayer[key] = oldPlayer[key];
        }
    }
    return convertToPlayer(newPlayer);
}

module.exports = {
    buildFileForPerson,
    convertToPlayer,
    convertToGoalkeeper,
    updatePlayer
}