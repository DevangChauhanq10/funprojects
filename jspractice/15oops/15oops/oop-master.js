let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.hitesh = function () {
  //Now every array in your program can use .hitesh():
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.hitesh());  output is: Custom method 1,2,3
let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hitesh()); Custom method 1,2,3,4,5,6

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  yooletsstart() {
    //same as Vehicle.prototype.yooletsstart = function() { ... }//

    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  // Inheritance: It means a class can inherit properties and methods from another class.
  //Car inherits everything from Vehicle. Vehicle is parent class and car is child
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let z = new Car("Toyota", "Corolla");
// console.log(z.yooletsstart()); Corolla is a car from Toyota
// console.log(z.drive()); Toyota: This is an inheritance example

let vehOne = new Vehicle("Toyota", "Corolla");
// console.log(vehOne.make); Toyota

// Encapsulation: restricting direct access to object data

class BankAccount {
  #balance = 0; // private field .By putting # before balance it becomes private thus cannot be accessed outside the class

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `Rs. ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction : hiding complex implementation details and showing only the necessary parts

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism : ability to present the same interface for different data types. To display something in more than one form

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
//console.log(bird.fly()); //Flying...
//console.log(penguin.fly()); //Penguins cant fly

// static method

class Calculator {
  static add(a, b) {
    //statics are special methods that can only be called by the class itself
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3)); WRONG!!!. for this to work u shoukd remove static

// console.log(Calculator.add(2, 3)); RIGHT!!! this works with static

// Getters and setters

// getters are used to access properties and setters are used to modify them.
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", 50000);
console.log(emp._salary); //undefined, because the constructor sets only #salary, not _salary
//console.log(emp.salary) //You are not allowed to see salary
emp.salary = 60000;
//The setter updates oon _salary, not salary
