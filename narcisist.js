function narcissistic(value) {
 
    let valString = value.toString().split('');
 
    let integerSet = valString.map((item)=>{
     return Number(item);
    })
   
    let keyFunc = function powerCalc(test){
      let a = test.length;
      return test.map((item)=>{
        return Math.pow(item, a);
      }).reduce((total, item)=>{
        return total + item;
      }, 0);
    }

    if(keyFunc(integerSet)==value){
       return true;
     }
    else {
       return false;
     }
}

console.log(narcissistic(1652));// false
console.log(narcissistic(153));  // true
