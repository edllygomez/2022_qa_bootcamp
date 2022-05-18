function isMultiple(num){
    //declaracion de variables
    let sum=0;
    if(num>=0){
        for (let i = num-1; i > 0; i--) {
            if(i%3===0 && i%5===0){
                sum+=i;
            } else if (i%3===0 || i%5===0){
                sum+=i;
            }
        }
    }
    console.log(sum);
}
//const num1=10;
isMultiple (num1);

