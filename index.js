//Only Odds
//Create a javascrpit code tha modifies a copy of anarray of numbers and returns
// a new array with only the odd numbers from  the original array.
// If there is only one odd number in the array, return an array eith that single value.

console.log('********** ONLY ODDS **********')

const OnlyOddsinput = [2, 4, 6, 8, 10, 11, 12];
const onlyOdds = [];
for (let i = 0; i < OnlyOddsinput.length; i++) {

    if (OnlyOddsinput[i] % 2 == 1) {
        onlyOdds.push(OnlyOddsinput[i])
    }
    // check if odd
    //     console.log('inside if statement');
    // } else {
    //     console.log('did not go into if statement');
    // }
}
console.log(onlyOdds);

console.log('********** VOWELS VS CONSONANTS **********')

/*
Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
"a", "e", "i", "o", and "u" are considered vowels. 
Every other letter is considered a consonant.
Hint: Define two variables that keep track of the number of consonants and vowels.
*/

// concatenate -> {input} has {num of consonants} consonants and {num of vowels} vowels
// count num of consonants -> letters
// count num of vowels

const vowelConsonantInput = 'ukelele'

let vowelCount = 0;
let consonantCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < vowelConsonantInput.length; i++) {


    if (vowels.includes(vowelConsonantInput[i])
    ) {
        // vowel
        // increment vowel count by 1
        vowelCount++
    } else {
        //consonant
        // increment consonant counts by 1
        consonantCount++
    }
}
//{input} has {num of consonants} consonants and {num of vowels} vowels
console.log(`${vowelConsonantInput} has ${consonantCount} consonants and ${vowelCount} vowels `)

console.log('********** REVERSE ARRAY **********')

// With a for loop, create a JavaScript code that creates a new array in reverse order

const newarray = [1, -1, 2, -3, 5, -8, 13]

const reversedArray = []

for (let i = newarray.length - 1; i >= 0; i--) {
    const valueAtIndex = newarray[i]

    reversedArray.push(valueAtIndex)
}

console.log(reversedArray)

console.log('********** FIZZBUZZ **********')
// Create a JavaScript code that prints each number from 1 to 100 on a new line.


// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.



const numbers1to100 = 'fizz, buzz or fizzbuzz'
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    else {
        console.log(i);
    }
}