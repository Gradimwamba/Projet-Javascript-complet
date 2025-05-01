//ESS
var addition = function(a, b) {
    return a + b;
}
console.log(addition(20, 40)); //20 + 40

//var addition = (20, 40); 20 + 40; //Fonction fléchée

const  addition2 = (a, b) => {
    console.log('Addition de ' + a + ' et ' + b);
    
}
console.log(addition2(10, 2)); //20 + 40

const DitBonjour = nom => console.log(`Bonjour ${nom}`); //Fonction fléchée avec un seul paramètre
DitBonjour('Gradi'); //Affiche 'Bonjour Gradi'

//Paramètre par défaut
const multiplicationPar2 = (a, b = 2) => a * b; //Fonction fléchée avec un paramètre par défaut
console.log(multiplicationPar2(5)); //Affiche 10


const Advanced = (x, y = 0, z = 0) => x + y + z; //Fonction fléchée avec plusieurs paramètres
console.log(Advanced(5, 10, 20)); //Affiche 35