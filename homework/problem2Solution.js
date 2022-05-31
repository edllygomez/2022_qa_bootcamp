function isNarcissistic(number) {
    if (Math.sign(number) === -1 || Math.sign(number) === -0 || Math.sign(number) === 0) {
        //only valid positive non-zero integers will be passed into the function.
        return false;
    } else {
        let values = number.toString().split('').map(Number); //new array with value split in each position
        let pow = values.length;//number of digits stored
        let sum = values.reduce((result, value) => result + Math.pow(value, pow), 0);
        //this is the same than doing let result += Math.pow(values[i],pow);
        return sum == number;
    }//else
}//isNarcissistic

console.log(isNarcissistic(0));