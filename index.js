/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let toungeTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// Print out the concatenated string

console.log(toungeTwister)

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let new1 = part1.slice(0,part1.length-1)
console.log(new1)
let last1 =part1.slice(part1.length-1)
last1 = last1.toUpperCase()
let new2 = part2.slice(0,part2.length-1)
console.log(new2)
let last2 =part2.slice(part2.length-1)
last2 = last2.toUpperCase()
let cameLtaiL = new1 + last1 + new2 + last2

// Print the cameLtaiL-formatted string

console.log(cameLtaiL)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipAmount = billTotal *0.15

// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let rand = Math.random()
rand = rand*10
rand = Math.round(rand)

// Print the generated random number

console.log(rand)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

console.log(expression1,"false");
console.log(expression2,"true");
console.log(expression3,"false");
console.log(expression4,"true");
console.log(expression5,"true");
console.log(expression6,"false");
console.log(expression7,"true");