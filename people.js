//importo da name.js
const fullName = require("./name.js");
const hobbies = require("./hobbies.js");



const user = ()=>{
   
    
    const result = {
        persona: fullName("Mario","Rossi"),
        hobbies:hobbies("Gaming", "Car Tuning", "Techno Music")
    }
    return result
}
console.log(user())


