let gamename = "GTA";

gamename = "FIFA";
console.log(gamename);

const player = "Messi";

player = "Ronaldo"; //will give variable cause const cant be changed once declared/

console.log(player);
//we can assign throught var , let, const but const cant be changed
/* var = global access even if defined inside brackets  thus its not block scoped , it can be redeclared and reassigned anywhere 
but RISKY*/

/*let = exists only inside {} ie block scoped , can reassign anytime , can't be redeclared inside the same scope but outside 
that scope we can define it  */

// const = cannot be redeclared inside same scope only possible outside scope
//  reassigning IMPOSSIBLE//
