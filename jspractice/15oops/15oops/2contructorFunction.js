/*What is a Constructor Function?

A constructor function in JavaScript is:

A normal function

Meant to create objects

Used with the new keyword

Has property assignments using this*/

function Person(name, age) {
  this.name = name; //this refers to the object being created
  this.age = age;
}
function car(make, model) {
  this.make = make; // puts a property make inside the new object.
  this.model = model;
}
let c1 = new car("Honda", "Elevate");
console.log(c1);
let c2 = new car("Honda", "City");
console.log(c2);
//Constructor With a Method Inside the Object
function Tea(type) {
  this.type = type;
  this.describe = function () {
    //You created a method on the object Meaning every Tea object you create will have a method named describe//
    return `This is a cup of ${this.type}`;
  };
}
let lemontea = new Tea("Lmao");
console.log(lemontea);
console.log(lemontea.describe());

//Constructor With Prototype Method//
function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Please call Drink with new keyword"); //throw means stop execution and throw an exception. new Error() creates an Error object,
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
