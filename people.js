//importo da name.js
const fullName = require("./name.js");
const hobbies = require("./hobbies.js");

const user = ()=>{
    return{
        fullName, hobbies
    }
}
console.log(user(fullName,hobbies))