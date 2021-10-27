// export { Person };

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

// const person = new Person('Shahar', 'Kamay', 12000,22, 1);
// console.log(person.getFirstName);

module.exports = Person;