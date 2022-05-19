//Problem 1
function isMultiple(num){
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
let num1=0;
isMultiple (num1);

//Problem 2
function isNarcissistic(num){
    if(num>0 && !isNaN(num)){
        let numS = num.toString();
        let nuevo = Array.from(numS);
        let sum=0;
        for(let i = 0; i<nuevo.length; i++){
            let aux=0;
            aux = nuevo[i]**nuevo.length;
            sum+=aux;
             
        }
        if(sum===num){
            console.log(true);
        } else console.log(false);

    } else {
        console.log("Error input invalid, please check");
    }
    
    
}
let num2 = 0;
isNarcissistic(num2);


//Problem 3
function maskify(input){
    let nString = input.toString();
    let nArray = Array.from(nString);
    if(nArray.length>4){
        let j=0;
        for(let i=nArray.length; i>0; i--){
            j++;
            if(j<=3){
                nArray[i]='*';
            }
            console.log (nArray[j-1]);
        }
    } else console.log(input);
    
}
let entry = "horse";
maskify(entry);
 