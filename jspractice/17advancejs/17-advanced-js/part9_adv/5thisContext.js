const Person = {
  //obvject
  name: "Devang",
  greet() {
    console.log(`Hey I am ${this.name}`);
  },
};

Person.greet();

/*const greetfunction = Person.greet;   --->>Will not work cause context is lost when we transfer to another variable
greetfunction();*/

const greetfunction = Person.greet.bind({ name: "Aryan" });
greetfunction();

//bind, call , apply
