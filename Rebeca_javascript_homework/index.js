
//Problem 1.

let number = 0;




function problem1(number){
    const multiples=[];
    
    for (var i = 0; i < number.length;i++){
        //let result = number[i] % mult
        if(number[i] % 3 == 0){
        multiples.push(number[i]);
        } 
        else if(number[i] % 5 ==0) {

            multiples.push(number[i]);
             }

     
    }
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log(multiples.reduce(reducer));
     return multiples;
      
}

//Problema 2

const isnarcisista = n =>{

    const numeroComoString = n.toString(),
    CantidadDeDigitos = numeroComoString.length;
    let suma=0;

    for (let i = 0; i < CantidadDeDigitos; i++){
        
        let ConvertiraNumero = parseInt(numeroComoString[i]),
        elevarNumero = ConvertiraNumero ** CantidadDeDigitos;
        suma = suma + elevarNumero;
    }

    if(suma == n) return true;
    else return false;
    
    
}


//Problema 3

const maskify = (value) =>{
    return value.slice(0,-4).replace(/[a-zA-Z]/g,'#').concat(value.slice(-4,value.length));
}

//Problem 4

const ispangram = text =>{
    let abc="abcdefghijklmnopqrstuvwxyzx";
    let regex = /\s/g;
    let lowcase = text.toLowerCase().replace(regex,"");

    for(let i =0; i < abc.length;i++){
        if(lowcase.indexOf(abc[i])=== -1){
            return false;
        }
    }

    return true;
}

// Problema 5 --- arreglar porque esta como multiplicando

const numberofDuplicates = text1 =>{
    if(text1){
        var count = {};
        for (let i = 0; i < text1.length;i++){
            if(count[text1[i]]){
                count[text1[i]]+=count[text1[i]];
            } else {
                count[text1[i]]=1;
            }
        }
        console.log(count);
    }



}