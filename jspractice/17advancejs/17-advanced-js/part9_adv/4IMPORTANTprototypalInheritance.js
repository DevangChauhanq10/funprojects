function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let hitesh = new Person("hitesh"); //The 'new' keyword automatically links 'hitesh' to 'Person.prototype
hitesh.greet();
/*You are telling JavaScript, "I want every object created by Person to have access to this function, but I don't want to
 copy the function code 100 times."
The Chain: When you create an instance (e.g., dave), dave does not actually contain the greet function.
The Lookup: When you call dave.greet(), JavaScript checks dave first. It doesn't find greet there. It then looks "up the chain" 
to Person.prototype, finds it there, and runs it.*/


The difference in approach 
Person.prototype (The "Factory" Approach): This sets up a rule for the future. You are setting up the machinery so that every 
time you use the new keyword, the link is created automatically for you.Context: Used when defining
 a "Type" or "Class" of objects (like creating many Users, many Cars, etc.).
 Relationship: One Prototype to Many Instances.

 Object.setPrototypeOf(a, b): (The "Manual" Approach)This takes two specific objects that already exist (a and b) and 
 manually wires them together.Context: Used when you want to change the inheritance of a specific object dynamically (which is
   rare) or create a simple link without a constructor function.
   Relationship: Object A to Object B.