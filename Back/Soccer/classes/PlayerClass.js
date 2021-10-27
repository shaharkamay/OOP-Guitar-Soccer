// import { Person } from './PersonClass.js';
const Person = require('./PersonClass');

class Player extends Person{
    constructor(firstName, surname, salary, age, id, strongLeg, position, celebrationSentence){
        super(firstName, surname, salary, age, id);
        this.strongLeg = strongLeg;
        this.position = position;
        this.celebrationSentence = celebrationSentence;
    }
    goalCelebration(){
        console.log(this.getCelebrationSentence); //print celebration
        this.setSalary = Math.round(this.salary * 1.025); //increase salary by 2.5%
        console.log(`Congratulations, Your salary has increased to ${this.salary}`);
    }
    get getStrongLeg(){
        return this.strongLeg;
    }
    get getPosition(){
        return this.position;
    }
    set setPosition(newPosition){
        this.position = newPosition;
    }
    get getCelebrationSentence(){
        return this.celebrationSentence;
    }
    set setCelebrationSentence(newSentence){
        this.celebrationSentence = newSentence;
    }
}

const Nadav = new Player('Nadav', 'Vol', 27000, 23, 2, 'right', 'ST', 'Siiii');
// console.log(Nadav.getCelebrationSentence);

module.exports = Player;