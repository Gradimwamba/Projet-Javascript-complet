const alphabet = ['A', 'B', 'C', 'D', 'E', 'F',];
const chiffres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//const a = alphabet[0];
//const b = alphabet[1];
 //console.log(a, b); //A B

//Destructuration
// const [a,, ...rest] = alphabet;
// console.log(a, rest); //A C

//Spread operator pour combiner deux tableaux
const alphaNumeriques = [...alphabet, ...chiffres];
console.log(alphaNumeriques); //['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Spread operator pour concatener deux tableaux
console.log(alphabet.concat(chiffres)); //['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

