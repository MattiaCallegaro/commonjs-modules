//importo da name.js
const fullName = require("./name.js");
const hobbies = require("./hobbies.js");



const user = ()=>{
   
    const x = fullName("Mario","Rossi") 
    const y = hobbies("Gaming", "Car Tuning", "Techno Music")

    const result = {
        persona: fullName("Mario","Rossi"),
        hobbies:hobbies("Gaming", "Car Tuning", "Techno Music")
    }
    return result
}
console.log(user())


