console.log("hello");
console.table("Hahaha");

console.table({ food: "Pizza" });

console.warn({ city: "Doon" });

let age = 24;
console.log(`My age is ${age}`);

let s = "Devang";
console.log(s.slice(1)); // dega index 1 se end tk
console.log(s.slice(1, 4)); //string index 1,2,3 dega

let t = "Devang isf coding";
console.log(t.slice(2, 10));

let x = {
  name: "Devang",
  age: 24,
  "is married": false,
};
console.log(x);

for (const key in x) {
  //forin
  if (!Object.hasOwn(x, key)) continue;
  {
    console.log(key, x[key]);
  }
}
