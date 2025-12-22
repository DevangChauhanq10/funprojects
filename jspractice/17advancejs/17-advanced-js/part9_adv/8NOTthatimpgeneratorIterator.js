function* numberGenerator() {
  //// This is a generator function. It does not execute completely at once.
  // Execution pauses at each `yield` and resumes from that point on the next call.
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
