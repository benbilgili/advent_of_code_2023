// Generate a string and then sort its contents into two arrays one of numbers and one of letters. Bonus for sorting the arrays - Dougmac

const string1 = "#1a3c2b#"
const string2 = "sngls'4564#[;45gkore5uypormherl;h5#][e5oy79p4y5"

const stringSorter = (string) => {
    let letterArray = []
    let numArray = []
    for (let char of string) {
        if (!isNaN(parseInt(char))) {
            numArray.push(char)
        } else if (char.match(/[a-zA-Z]/)) {
            letterArray.push(char)
        }
    }
    console.log(letterArray.sort())
    console.log(numArray.sort((a, b) => a - b))
}



stringSorter(string1)
stringSorter(string2)