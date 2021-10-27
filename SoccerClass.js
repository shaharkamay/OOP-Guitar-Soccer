class Person{
    #id; //private field
    constructor(firstName, surname, salary, age, id){
        this.firstName = firstName;
        this.surname = surname;
        this.salary = salary;
        this.age = age;
        this.#id = id;
    }
    get getFirstName(){
        return this.firstName;
    }
    get getSurname(){
        return this.surname;
    }
    get getSalary(){
        return this.salary;
    }
    set setSalary(newSalary){
        this.salary = newSalary;
    }
    get getAge(){
        return this.age;
    }
    set setAge(newAge){
        this.age = newAge;
    }
    get getId(){
        return this.#id;
    }
}

class Player extends Person{
    constructor(firstName, surname, salary, age, id, strongLeg, position, celebrationSentence){
        super(firstName, surname, salary, age, id);
        this.strongLeg = strongLeg;
        this.position = position;
        this.celebrationSentence = celebrationSentence;
    }
    goalCelebration(){
        console.log(this.celebrationSentence); //print celebration
        this.salary = Math.round(this.salary * 1.025); //increase salary by 2.5%
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
class Goalkeeper extends Person{
    constructor(firstName, surname, salary, age, id, isLeftHanded, lastGoalConceeded = new Date(Date.now())){
        super(firstName, surname, salary, age, id);
        this.isLeftHanded = isLeftHanded;
        this.lastGoalConceeded = lastGoalConceeded;
    }
    conceededAGoal(){
        this.lastGoalConceeded = new Date(Date.now()); //update date to current
        this.salary = Math.round(this.salary * 0.975); //decrease salary by 2.5%
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

const Ziv = new Goalkeeper('Ziv', 'Zerphos', 7500, 22, 0, true, undefined);
console.log(Ziv.getIsLeftHanded);