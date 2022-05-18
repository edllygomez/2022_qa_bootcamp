// -----------------------------Homework-----------------------------------


// Problem 1 solution
function problem1(number) {
    let sum = 0;

    for (number--; number > 2; number--) {
        if ((number % 3) === 0 || (number % 5) === 0)
            sum += number
    }
    return sum
}
    
// Problem 2 solution
function problem2(number) {
    let sum = 0;

    let numbers_Array = number.toString().split('').map(Number); // Array of the split numbers 
    let pow = numbers_Array.length // Exponent

    function addition(number) {
        sum += number**pow;
    }

    numbers_Array.forEach(addition)
    return sum === number ? true : false;
}

// Problem 3 solution

const problem3 = (value) => {
    let regularExpression = new RegExp('.(?=.{4})', 'g'); // Regular expression to find all characters but the last 4
    return value.replace(regularExpression, "#"); 
  }



// Problem 4 solution

function problem4(string) {
    string = string.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet_Array = alphabet.split('');
    let string_Length = string.length
   
    for (let i = 0; i < string.length; i++) {
       const position = string[i];
       const index = alphabet_Array.indexOf(position);
       if (index !== -1) {
        alphabet_Array.splice(index, 1);
       };
    };
    return !alphabet_Array.length;
};


// Solución interesante en internet usando regex:

// function isPangram(string) {
//     var regex = /([a-z])(?!.*\1)/g;
//     return (string.match(regex) || []).length === 26;
// }


// Problem 5 solution
// The solution for this problem was to create 2 arrays, 
//  1 with the split function and other one with no duplicates, then compare them both and count
function problem5(text) {
    let duplicate_Counter = 0;
    let text_Array = text.toLowerCase().split('');
    let count_Array = new Array();

    function add_Count_Array(letter){
        if(count_Array.includes(letter) === false){
            count_Array.push(letter);    
        }
    }

    text_Array.forEach(add_Count_Array);

    function amount_Of_Duplicates(letter){
        let duplicate = 0;
        for(let i = 0; i < text_Array.length; i++) {
            if (text_Array[i] === letter){
                duplicate++;
            }
        }
        
        if (duplicate>1){
            duplicate_Counter++;    
        }
        return duplicate;
    }

    if (count_Array.forEach(amount_Of_Duplicates)>1){
        duplicate_Counter ++;
    }
    return duplicate_Counter    
}
