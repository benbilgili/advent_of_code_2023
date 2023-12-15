// Write a program using your voice instead of typing (e.g. windows dictation toolbar) - Matt Munro


// The below was written about 80% by voice! 

let myName = 'Ben Bilgili'

const counter = (name) => {
   let count = 0;
   for (let i of name) {
        if (i != ' ')
            count++;
   }
   console.log(count);
   return count;
}



counter(myName)




