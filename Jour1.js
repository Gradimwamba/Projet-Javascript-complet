const monNomComplet = 'Gradi MWAMBA'
let monAge = 24
let maVille = 'Kinshasa'

let msg = `je m'appele ${monNomComplet}, j\'ai ${monAge} ans  et je vis à ${maVille}.`

let mesPropietes = ['monNomComplet', 'monAge', 'maVille']

 function presentation(monNomComplet,monAge) {
    return msg
}
console.log(presentation(mesPropietes)); 


const presentention = () => `je m'appele ${monNomComplet},  j'ai ${monAge} ans  et je vis à ${maVille}.`
console.log(presentention()); //Affiche 'je m'appelle Gradi MWAMBA, j'ai 24 ans et je vis à Kinshasa'


let myTable = ['JavaScript', 'Python', 'Java', 'C#', 'PHP',]
console.log(myTable);


let profil = {
    Nom : '',
    age : 26,
    ville : 'Kinshasa',
    langages: 'Lingala'
}


const PrenomComplet = 'Exauce MBOMA'
let commune = 'Kalamu'
let quartier = 'Kauka'
let age = 30

let messages = `Je préfère me présenter, je suis ${PrenomComplet}, j'ai ${age} ans, j'habite dans la commune de ${commune} au quartier ${quartier}`

const identité = (commune,quartier, age) => messages

console.log(identité (messages));
