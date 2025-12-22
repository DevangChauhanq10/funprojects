let computer = { cpu: 12 };
let dell = { screen: "HD" };
console.log(computer.cpu);
console.log(`computer`, computer.__proto__); // __ is called dandu(a)r //

let sony = { screen: "LED", __proto__: computer }; //linking it to computer//
console.log(`sony`, sony.__proto__); // sony{cpu:12}

let genericcar = { tyres: 4 };
let tesla = { driver: "AI" };
Object.setPrototypeOf(tesla, genericcar); //serPrototyprof is just alternative of  not using dandar . (CHILD , PARENT)//
//who should access what , where to what. In tesla i want to see properties of generic car//
console.log(`tesla`, tesla);

console.log(`tesla`, Object.getPrototypeOf(tesla));
