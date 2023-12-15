// Implement a simple compression algorithm to convert a given string. (e.g. AAAABBBB -> A4B4) The smaller the output the better! - Matt Munro

let letters = "AAAABBBB"

const compress = (string) => {
    let foundLetters = []
    let resultObject = {}
    let resultString = ""
    // Make an array of unique chars from string
    for (let character of string) {
        if (!foundLetters.includes(character)) {
            foundLetters.push(character)
        }
    }
    // For each unique char, count how many times it occurs and add to object
    foundLetters.forEach((letter) => {
        let count = 0
        for (let character of string) {
            if (letter == character) {
                count++
            }
            resultObject[letter] = count
        }
        count = 0
    })
    // Create string of object content
    for (let key in resultObject) {
        resultString += `${key}${resultObject[key]}`
    }
    // Log Result
    console.log(resultString)
}

compress(letters)