
// //mi dichiaro la variabile oggetto user e dentro metto le chiavi firstName assegnandogli Mattia e lastName assegandogli Callegaro
// const user = {
//     firstName:"Mattia",
//     lastName:"Callegaro"
// }
// //dichiaro una funzione che come parametro abbia le chiavi di user e mi faccia tornare la somma delle chiavi 
// function fullName(firstName,lastName){
//      user = {
//             firstName:"Mattia",
//             lastName:"Callegaro"
//         }
//     return firstName + lastName
// }

// //stampo in console
// console.log(user)`

// function fullName(firstName,lastName){
//     return {
//         firstName:"Mattia",
//         lastName:"Callegaro"
//     };
// }

// console.log(fullName)`

// let firstName = "Mattia"
// let lastName = "Callegaro"

// const fullName = (firstName, lastName) =>{
//     return firstName +" "+ lastName
// }

// console.log(fullName(firstName,lastName))




//prima mi dichiaro le variabili assegnandogli un valore
// let firstName="Mattia"
// let lastName = "Callegaro"
//mi creo una funzione che mi ritorna un oggetto con i valori dichiarati fuori dalla funzione
const fullName=(firstName, lastName)=>{
    return{
        firstName,
        lastName
    };
};

//stampo in console
// console.log(fullName("Mario","Rossi"))

//esporto
module.exports = fullName