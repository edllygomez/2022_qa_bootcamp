function sumMultiples(number) {
    let sum = 0;
    if (Math.sign(number) === -1 || Math.sign(number) === -0) {// if a number is negative, return 0
        return sum;
    } else {
        for (let i = 0; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) { //If the number is a multiple of both 3 and 5, only count it once
                sum += i;
            }//if
        }//for
        return sum;
    }//else1
}//sum multiples

console.log(sumMultiples(10));