/*
 ----------------  Javascript Homework by Rebeca Alvarado -------------------------
 */

//Problem 1. Sum multiples of 3 or 5

function problem1(number) {
    //Save numbers that are multiples of 3 or 5 in array
    const multiples = [];

    //the param number can recive a list of numbers that they will be check if is multiple of 3 or 5 and save in the array by a for cycle
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 3 == 0) {
            multiples.push(number[i]);
        }
        else if (number[i] % 5 == 0) {

            multiples.push(number[i]);
        }
    }

    //Callback function to sum element from array
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log(multiples.reduce(reducer));
    return multiples;

}

//Problem 2: Get if a number is a narcissistic value or not

const isnarcisista = n => {
    //First convert the number to string
    const numeroComoString = n.toString(),
        //Get the length of the number converted to string
        CantidadDeDigitos = numeroComoString.length;
    let suma = 0;
    //Read each digit by the for cycle and then make the math operations
    for (let i = 0; i < CantidadDeDigitos; i++) {

        let ConvertiraNumero = parseInt(numeroComoString[i]),
            //get exponencial results
            elevarNumero = ConvertiraNumero ** CantidadDeDigitos;
        //get sum results
        suma = suma + elevarNumero;
    }

    //Identify if is narcissistic

    if (suma == n) return true;
    else return false;


}


//Problema 3: Maskify text using a function that replace letters to # let it the last 4 numbers without maskify

const maskify = (value) => {
    return value.slice(0, -4).replace(/[a-zA-Z]/g, '#').concat(value.slice(-4, value.length));
}

//Problem 4

const ispangram = text => {
    //save the alphabet in a variable
    let abc = "abcdefghijklmnopqrstuvwxyzx";
    let regex = /\s/g;
    //convert all text passed in to lowercase
    let lowcase = text.toLowerCase().replace(regex, "");

    //pass the text through a for cycle to check if is a pangram
    for (let i = 0; i < abc.length; i++) {
        if (lowcase.indexOf(abc[i]) === -1) {
            return false;
        }
    }

    return true;
}

// Problema 5: Count duplicates letters

const numberofDuplicates = text1 => {
    if (text1) {
        var count = {};
        //Use for cycle to count the letters and count duplicates
        for (let i = 0; i < text1.length; i++) {
            if (count[text1[i]]) {
                //verify letter and sum if is duplicate
                count[text1[i]] = (count[text1[i]] || 0) + 1;
            } else {
                //if is not duplicate it just let as 1
                count[text1[i]] = 1;
            }
        }
        console.log(count);
    }



}