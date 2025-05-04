const monNomComplet = 'Gradi MWAMBA'
let monAge = 24
let maVille = 'Kinshasa'

 function presentation(monNomComplet,monAge, maVille) {
    return `je m'appele ${monNomComplet}, j\'ai ${monAge} ans  et je vis à ${maVille}.`
}
console.log(presentation(monNomComplet,monAge, maVille)); //Affiche 'je m'appelle Gradi MWAMBA, j'ai 24 ans et je vis à Kinshasa'


const presentation2 = () => `je m'appele ${monNomComplet},  j'ai ${monAge} ans  et je vis à ${maVille}.`
console.log(presentation2()); //Affiche 'je m'appelle Gradi MWAMBA, j'ai 24 ans et je vis à Kinshasa'


let myTable = ['JavaScript', 'Python', 'Java', 'C#', 'PHP',]
console.log(myTable);


let profil = {
    Nom : 'Gradi MWAMBA',
    age : 26,
    ville : 'Kinshasa',
    langages: ['Javascript', 'Python', 'PHP'],
}


const PrenomComplet = 'Exauce MBOMA'
let commune = 'Kalamu'
let quartier = 'Kauka'
let age = 30

const identité = ( PrenomComplet,commune,quartier, age) => `Je préfère me présenter, je suis ${PrenomComplet}, j'ai ${age} ans, j'habite dans la commune de ${commune} au quartier ${quartier}`


console.log(identité (PrenomComplet, commune,quartier, age)); //Affiche 'Je préfère me présenter, je suis Exauce MBOMA, j'ai 30 ans, j'habite dans la commune de Kalamu au quartier Kauka'
