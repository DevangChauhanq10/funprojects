let a = 5;
let b = 8;
//compare two numbers//
if (a > b) {
  console.log("a is bigger than b");
} else console.log("a is smaller than b");

//compare the strings//
let username = "Devang";
let username2 = "Devang";
if (username == username2) {
  console.log("String is same");
} else {
  console.log("String different");
}

//checking if a variable is a number
let score = 14;
if (typeof score === "number") {
  console.log("score is a number");
} else {
  console.log("score isnt a number");
}

let lol = [];
if (typeof lol === "object") {
  console.log("lol is a object");
} else {
  console.log("lol isnt a object");
}

//array empty or not
let items = [];
if (items.length === 0) {
  console.log("array is empty");
} else {
  console.log("Non empty");
}
