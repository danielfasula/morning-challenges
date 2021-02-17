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
function isPalindrome(str) {
    return str.split("").reverse().join('') == str ? true : false
}

isPalindrome('tacocat')
//returns true
isPalindrome('hello')
// returns false
isPalindrome('aibohphobia')
//returns true

