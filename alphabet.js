const isPangram = (string) => 
     new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(isPangram("this is a test to pangram"));  
console.log(isPangram("The Quick Brown Fox Jumps over the lazy dog")); 