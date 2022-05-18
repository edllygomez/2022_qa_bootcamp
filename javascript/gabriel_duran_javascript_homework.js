/**
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, 
return 0(for languages that do have them)
*/

function multiplesSum(number) {
    if(number <=0) {
        return 0;
    } else {
        let listMultiples = [];
        for(let i = 0; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) listMultiples.push(i);
        }
        let sum = listMultiples.reduce((a,b) => a + b);
        return sum;
    }
}

/**
 * Problem 2
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the 
number of digits in a given base. In this exercise, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 The Challenge:
Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers 
will be passed into the function.
 */

function isNarcissistic(number) {
    let digits = number.toString().split('').map(Number);
    let raisedPower = [];
    for (let i = 0; i < digits.length; i++) {
        raisedPower.push(Math.pow(digits[i], digits.length));
    }
    let sum = raisedPower.reduce((a,b) => a + b);
    return (sum == number) ? true : false;
}

/**
 * Problem 3
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your 
most secret question is still correct. However, since someone could look over your shoulder, you don't want 
that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") ==> "############5616" maskify("64607935616") ==> "#######5616"
maskify("1") ==> "1" maskify( "") ==> ""
// "What was the name of your first pet?"
maskify("Skippy") ==> "##ippy" maskify("Nananananananananananananananana Batman!") ==> "####################################man!"
 */

function maskify(value) {
    return value.slice(-4).padStart(value.length, '#');
}

/**
 * Problem 4
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z 
at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    for(let i = 0; i < alphabet.length; i++){
        if (sentence.toLowerCase().indexOf(alphabet[i]) < 0) { return false; }
    }
    return true;
}

/**
 * Problem 5
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. The input string can be assumed to contain 
only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 "aabbcde" -> 2 "aabBcde" -> 2 "indivisibility" -> 1 "Indivisibilities" -> 2 "aA11" -> 2 "ABBA" -> 2
# no characters repeats more than once
# 'a' and 'b'
# 'a' occurs twice and 'b' twice (`b` and `B`) # 'i' occurs six times
# 'i' occurs seven times and 's' occurs twice # 'a' and '1'
# 'A' and 'B' each occur twice
 */

function numDuplicates(sentence) {
    let cont = [];
    let newSentence = sentence.toLowerCase().split('');
    newSentence.forEach(function (value, index, arr){
        let first_index = arr.indexOf(value);
        let last_index = arr.lastIndexOf(value);
         if(first_index !== last_index){
             cont.push(value);
         }
    });
    cont = cont.filter((item, index) => {
        return cont.indexOf(item) === index;
    })
    return cont.length;
}