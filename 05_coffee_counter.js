// Free Coffee-cup counter - Every 6 cups of coffee I buy I get the 7th cup for free. 
// Create a function that takes the total cups I have bought and returns how many free cups I would recieve - Bruce

const freeCoffeeCounter = (coffeesBought) => Math.floor(coffeesBought/6)

console.log(freeCoffeeCounter(17))