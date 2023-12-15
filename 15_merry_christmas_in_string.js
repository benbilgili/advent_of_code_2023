// Generate an random string which is then parsed to check if it contains "merry christmas". 
// If not increase the length of the string until it does - Dougmac

let string = '';

function generateRandomString(length, initialString) {
  const characters = 'abcdefghijklmnopqrstuvwxyz ';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    initialString += characters.charAt(randomIndex);
  }

  return initialString;
}



function checkContainsMerryChristmas(str) {
  const targetString = "merry christmas";

  for (let i = 0; i < targetString.length; i++) {
    const targetChar = targetString.charAt(i).toLowerCase();
    if (!str.includes(targetChar)) {
      return false;
    }
  }

  return true;
}




function generateStringUntilMerryChristmas() {
  let newString = string;

  while (!checkContainsMerryChristmas(newString)) {
    newString = generateRandomString(1, newString);
  }

  console.log("Merry Christmas Found!")
  return newString;
}




console.log(generateStringUntilMerryChristmas());
