// Broken Bridge - Create a function which accepts a string of characters to represent a bridge which will return true if the bridge is safe to walk accross 
// (does not contain any empty spaces) otherwise false - Bruc

let string1 = "rgeg drhteht eggth"
let string2 = "srhrnardnb"

const bridgeSafe = (string) => {
    for (let letter of string) {
        if (letter == " ") {
            return false
        }
    }  
    return true
}

console.log("1: ", bridgeSafe(string1))
console.log("2: ", bridgeSafe(string2))