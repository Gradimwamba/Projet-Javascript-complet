const noms ='Gradi MWAMBA';
const age = 23;

//concaténation
console.log('Mon nom est ' + noms + ' et j\'ai ' + age + ' ans');

//Templote String (Backticks ``)
const msg =`Mon nom est ${noms} et j'ai ${age} ans`
console.log(msg);

//String Methods
console.log(msg.length); //Longueur de la chaîne
console.log(msg.includes('Gradi')); //Vérifie si la chaîne contient 'Gradi'
console.log(msg.startsWith('Mon')); //Vérifie si la chaîne commence par 'Mon'
console.log(msg.endsWith('ans')); //Vérifie si la chaîne se termine par 'ans'

const text = '   Bonjour tout le monde   ';
console.log(text.replace(/^\s+|\s+$/g, '')); //Supprime les espaces au début et à la fin de la chaîne
console.log(text.replace('Bonjour', 'Hello')); //Remplacer la veleur 'Bonjour' par 'Hello'

const langage = 'JavaScript';
let text2 ='';
for(X of langage) text2 += X + ' ';
console.log(text2); //Affiche chaque caractère de la chaîne séparé par un espace
