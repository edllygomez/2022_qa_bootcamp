// Javascript homework 

// Problem 1 
function problem1(n){
let sum = 0;
for (n--; 0 < n; n--){
    if(n %3 == 0 || n % 5 ==0){
        sum +=n;
    }
}
return sum;
}

//problem2
function narcissistic(value) {
 
    let valString = value.toString().split('');
 
    let integerSet = valString.map((item)=>{
     return Number(item);
    })
   
    let keyFunc = function powerCalc(test){
      let a = test[test.length-1];
      return test.map((item)=>{
        return Math.pow(item, a);
      }).reduce((total, item)=>{
        return total + item;
      }, 0);
    }

    console.log(keyFunc(153));

    if(keyFunc(integerSet)==value){
       return true;
     }
    else {
       return false;
     }
}

//Problem3

function maskify(cc){
    if (cc.length > 4) {
      let result = '';
      return cc.split('').reduce((acc, cur, i) => {
        if (cc.length - i > 4) {
          result += '#';
        } else {
          result += cur;
        }
        return result;
      }, '');
    } else {
      return cc;
    }
  }


console.log(narcissistic(12432));
console.log(narcissistic(153));

//problem4
function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const str = string.toLowerCase();
    
    for (let i = 0; i < alphabet.length-1; i += 1) {
      if (str.indexOf(alphabet[i]) === -1) {
        return false;
      }
    }
    
    return true;
  }

  //problem5
  function countDuplicates(str) {
    var myObj = {},
        counter = 0;    
    for(var i = 0; i < str.length; i++){   

      if(!myObj[str[i]]){
          myObj[str[i]] = 1;
      } 
      else if(myObj[str[i]] < 2) {
          myObj[str[i]]+=1;
          counter++;
      }    
    }
    return counter;
}