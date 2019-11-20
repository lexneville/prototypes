//----------------------------- CLASS REFRESHER ---------------------------------

class PersonC {
    constructor(name, age) {
        this.personName = name;
        this.personAge = age;
    }
    about() {
        return `${this.personName} is ${this.personAge} years old.`
    }
}

class Employee extends PersonC {
    constructor(name, age, id) {
    super(name, age);
    this.employeeId = id;
    }
}

let bob = new PersonC("Bob Marley", 74);
let michael = new Employee("Michael Jackson", 65, 87465);

console.log(bob.personAge);
console.log(bob.personName);
console.log(bob.about());
console.log(michael.personAge);
console.log(michael.personName);
console.log(michael.about());
console.log(michael.employeeId);

//----------------------------- NOW THE SAME PROCESS BUT WITH PROTOTYPES -----------------

let PersonP = function(name, age) {
    this.personName = name;
    this.personAge = age;
}

PersonP.prototype.about = function() {
    return `${this.personName} is ${this.personAge} years old`
}

let EmployeeP = function(name, age, id) {
    PersonP.call(this, name, age);
    this.employeeId = id;
}

EmployeeP.prototype = Object.create(PersonP.prototype);

let fred = new PersonP("Freddie Mercury", 73);
let jim = new EmployeeP("Jim Morrison", 76, 2398734);

console.log(fred.personAge);
console.log(fred.personName);
console.log(fred.about());
console.log(jim.personAge);
console.log(jim.personName);
console.log(jim.about());
console.log(jim.employeeId);



