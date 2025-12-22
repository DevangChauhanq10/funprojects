let num1 = 9;
let num2 = 9;
let num3 = 10;

console.log(num1 == num2); //true
console.log(num1 != num2); //false
console.log(num2 != num3); //true

let isloggedin = true;
let ispaid = false;

console.log(isloggedin && ispaid); //false

console.log(isloggedin || ispaid); //true

let score = 100;
score++;
console.log(score);

console.log(Math.abs(-6)); //modulus
console.log(Math.max(5, 12, 3));
console.log(Math.min(5, 12, 3));
console.log(Math.pow(2.5, 3));
console.log(Math.floor(16.225)); //GIF function
console.log(Math.random()); //random number b/w 0 and 1 excluding 0and1

/*setTimeout(function () {
  console.log("Hey");
}, 3 * 1000);*/

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000); //if we hade done 1*1000 or anything else it would print all numbers at once after "n" sec delay but we wanted
  //one sec delay for every number that is to be printed
}

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(11 - i);
  }, i * 1000);
}

//mapping:

let zrr = [1, 5, 7, 2];
let k = zrr.map(function (ele) {
  return ele * ele * ele;
});
console.log(k);
