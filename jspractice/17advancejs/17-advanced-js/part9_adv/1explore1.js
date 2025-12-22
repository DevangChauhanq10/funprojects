for (let i = 0; i < 10; i++) {
  console.log(i);
}
function whosthere() {
  console.log("Devang this side");
}

setTimeout(() => {
  whosthere();
}, 3000);
