// import { Person } from './PersonClass.js';
const Person = require('./PersonClass');

class Goalkeeper extends Person{
    constructor(firstName, surname, salary, age, id, isLeftHanded, lastGoalConceeded = new Date().toLocaleString()){
        super(firstName, surname, salary, age, id);
        this.isLeftHanded = isLeftHanded;
        this.lastGoalConceeded = lastGoalConceeded;
    }
    conceededAGoal(){
        this.setLastGoalConceeded = new Date().toLocaleString(); //update date to current
        this.setSalary = Math.round(this.salary * 0.975); //decrease salary by 2.5%
        return this.lastGoalConceeded;
    }
    get getIsLeftHanded(){
        return this.isLeftHanded;
    }
    get getLastGoalConceeded(){
        return this.lastGoalConceeded;
    }
    set setLastGoalConceeded(newDate){
        this.lastGoalConceeded = newDate;
    }

}

const Ziv = new Goalkeeper('Ziv', 'Zerphos', 7500, 22, 0, true);
// console.log(Ziv.conceededAGoal());

module.exports = Goalkeeper;