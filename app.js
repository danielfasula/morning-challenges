// --------------- 2/9/21 ---------------
let myObj = {
    name: 'Straw',
    color: 'red',
    width: 1,
    height: 100,
    otherName: 'liquid teleportation device',
    usage: 'drink liquids in an upright position',
    defiance: 'gravity',
}

let str = `
This is a ${myObj.name}, also known as a ${myObj.otherName}. It is known as that because it allows you to ${myObj.usage}, which defies ${myObj.defiance}. I enjoy this ${myObj.name} in particular becuase it is ${myObj.color}, and that is my favorite color.
`

// --------------- 2/10/21 ---------------

// write a function that takes in a number and returns 'even' if the number is even or 'odd' if it is odd.

function evenOrOdd(num) {
    num % 2 == 0 ? console.log('even') : console.log('odd');
}



// --------------- 2/16/21 ---------------


// Write a function that will take in a single argument, a string.The string will be a sentence and your function will return the longest word in that sentence.If there are multiple words tied for longest word, then return the word that appears in the sentence first.


// ONE LINER, YEAHHHH BOIIIIII
function longestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
}


longestWord("What is the longgest word in this sentence")


//Write a function that will take in one argument, a string. Determine if the given string is a palindrome, and return either true or false. (A palindrome is a word that's spelled the same both forward and backward.

// another one liner boiiiiiii
function isPalindrome(str) {
    return str.split("").reverse().join('') == str ? true : false
}

isPalindrome('tacocat')
//returns true
isPalindrome('hello')
// returns false
isPalindrome('aibohphobia')
//returns true


// Write a function that takes in a single str and return the most frequently occurring letter within that string

function mostCommonLetter(str) {

    //iterate through the array after alphabetized, and find the letter that has the most occurences
    let characters = str.split('')
    let dict = {}
    let greatest = {
        letter: '',
        value: 0
    }
    characters.forEach(c => {
        if (!dict[c]) {
            dict[c] = 0
        }
        dict[c]++
        if (dict[c] > greatest.value) {
            greatest.value = dict[c]
            greatest.letter = c
        }
    })
    console.log(greatest)
}

mostCommonLetter("hello")


//  Create a function that takes a number as its argument and returns an array of all its factors.

function factorize(n) {
    let factors = []
    for (let i = 0; i <= n; i++) n % i == 0 ? factors.push(i) : ''; console.log(factors);
}
//     for (let i = 0; i <= n; i++) {
//         if (n % i == 0) {
//             factors.push(i)
//         }
//     } console.log(factors);
//     if (factors.length == 2) {
//         console.log("Prime number");
//     }
// }

factorize(30)


// Write a function called timeConvert(min) that takes the min parameter being passed and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. If it is less than an hour you can return a 0 for hours

// divide min by 60, assign to hours, whatever is left over, assign to minutes

// one liner
function timeConvert(min) {
    console.log(Math.floor(min / 60) + ':' + min % 60)
    // let hours = 0, mins = 0
    // hours = Math.floor((min / 60))
    // mins = min % 60
    // console.log(hours + ':' + mins);
}

timeConvert(63)
timeConvert(55)
timeConvert(120)
timeConvert(255)


// Hobbits - 1, Men - 2, Elves - 3, Dwarves - 3, Eagles - 4, Wizards - 10
// Orcs - 1, Men - 2,    Wargs - 2,  Goblins - 2, Uruk Hai - 3, Trolls - 5, Wizards - 10
// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.   
// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
var goodValues = [1, 2, 3, 3, 4, 10]
var evilValues = [1, 2, 2, 2, 3, 5, 10]

var testGood = '1 1 1 2 1 0'
var testEvil = '2 0 1 0 1 0 1'

function battleForMiddleEarth(good, bad) {

    let getWorth = function (side, worth) {
        return side.split(' ').reduce((result, value, index) => {
            return result + worth[index] * value
        }, 0)
    }
    let result = getWorth(good, goodValues) - getWorth(bad, evilValues)

    return result > 0 ? console.log("Battle Result: Good triumphs over Evil") : result < 0 ? console.log("Battle Result: Evil eradicates all trace of Good") : console.log("Battle Result: No victor on this battle field")

    // let goodArmy = 0
    // let badArmy = 0

    // good.split(',')
    // goodArmy += (good[0] * 1) + (good[1] * 2) + (good[2] * 3) + (good[3] * 3) + (good[4] * 4) + (good[5] * 10)
    // bad.split(',')
    // badArmy += (bad[0] * 1) + (bad[1] * 2) + (bad[2] * 2) + (bad[3] * 2) + (bad[4] * 3) + (bad[5] * 5) + (bad[6] * 10)


    // goodArmy > badArmy ? console.log("Battle Result: Good triumphs over Evil") : badArmy > goodArmy ? console.log("Battle Result: Evil eradicates all trace of Good") : console.log("Battle Result: No victor on this battle field")
}

battleForMiddleEarth('1 1 1 1 1 1', '5 5 5 5 5 5 5')

//EX: 10, 20, 29 --> true
//EX: 10, 20, 31 --> false
//EX: 31, 10, 20 --> false
function isTriangle(num1, num2, num3) {
    return num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1 ? true : false
}

console.log(isTriangle(10, 20, 29))
console.log(isTriangle(10, 20, 31))
console.log(isTriangle(31, 10, 20))
console.log(isTriangle(100, 15, 16))