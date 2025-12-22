/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let i = 0;

while (i < 6) {
  sum = sum + i;
  i++;
}
console.log(sum);
// console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
let a = 5;
let arr = [];
while (a > 0) {
  arr.push(a);
  a--;
}
console.log(arr);
// console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

let teaCollection = [];
let tea;

do {
  tea = prompt("Enter your tea"); //we use prompt to take input
  if (tea != "stop") {
    teaCollection.push(tea);
  }
} while (tea != "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
let total = 0;
let j = 1;

do {
  total = total + j;
  j++;
} while (j < 4);
console.log(total);
/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
let multipliedNumbers = [];
let array = [2, 4, 6];
for (let i = 0; i < 3; i++) {
  array[i] = array[i] * 2;
  multipliedNumbers.push(array[i]);
}
console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i < 4; i++) {
  cityList.push(cities[i]);
}
console.log(cityList);
