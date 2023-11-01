/**
 * Question - 1
 * An integer is a plaaindrome when it reads same forawrd
 *  INput: X = 121  ------>>>> output : true
 *  Input: X = 10   ------>>>> output : false
 */


const isPalindrome = function (x) {
    return x == + x.toString().split("").reverse().join("");
}

var string ="surya"
var no = 5
console.log(+string)
console.log(+ no)
console.log(no.toString())
console.log(string.split("r"))

//** 
/**
 * console.log(string.reverse()) 
 * TypeError: string.reverse is not a function
 * The error message you're seeing, "TypeError: string.reverse is not a function," is because JavaScript's built-in String object does not have a reverse method. The reverse method is available for arrays, but not for strings.
 * If you want to reverse a string in JavaScript, you can use various methods. Here's one way to reverse a string:
 * 
 */



console.log(isPalindrome(113))