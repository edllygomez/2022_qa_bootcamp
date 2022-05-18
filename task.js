//Task 1
const result = num =>{
	let multiple = 0;
	for(let i = 0; i<num;i++){
	  
	  if(i%3==0 || i %5==0){
		multiple += i;
		console.log(multiple += i);
		
	  }
	}
	return multiple;
  }
  console.log(result(20));

   //Task3

   let MaskNumber = number => {
	  
	return '#'.repeat(number.length - 4) + number.substr(-4);
  }
  
  console.log(MaskNumber("ejemplo")); 


//task 4
function isPangram(string){
    // Matching string to letters in the alphabet
    let letters = string.toLowerCase().match(/[a-z]/g);
    // Add those letters to a Set to deduplicate
    let alphabet = [...new Set(letters)]
    // Assert that the length of the variable is 26
    return alphabet.length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));



//task 5


const string = 'ASASSSASAsaasaBBBASvcdNNSASASxxzccxcv';
const countFrequency = str => {
   const frequency = {};
   for(char of str.toLowerCase()){
      if(!frequency[char]){
         frequency[char] = 1;
      }else{
         frequency[char]++;
      };
   };
   return frequency;
};
console.log(countFrequency(string));


//task2 

function countDigit(n)
{
    if (n == 0)
        return 0;
  
    return (1 + countDigit(n / 10));
}
  
// Returns true if n is
// Narcissistic number
function check( n)
{
    // count the number of digits
    let l = countDigit(n);
    let dup = n;
    let sum = 0;
  
    // calculates the sum of digits
    // raised to power
    while (dup)
    {
        sum += Math.pow(dup % 10, l);
        dup = parseINT(dup / 10);
    }
  
    return (n == sum);
}
let n = 0987;
if (check(!n))
    console.log("True")
else
console.log("No")