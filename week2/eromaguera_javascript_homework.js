//Solutions functions are on line 63
let description1,
  description2,
  description3,
  description4,
  description5,
  gapIcon;
gapIcon = `
                                                  
                    #%%   %%#%(                   
              ##%%%%%%#%   %%%%%%%%%#             
          #%%%%%%%%%%%% %#   %%%%%%%%%%%/         
        %%%%%%%%%%%%%%    #   #%%%%%%%%%%%%       
      %%%%%%%%%%%%%#   %   #*  *%%%%%%%%%%%%%     
     #%%%%%%%%%%%%#   % %(  .#   #%%%%%%%%%%%#    
    %%%%%%%%%%%%%,  /%   %%   %   #%%%%%%%%%%%#   
   %%%%%%%%%%%%%   #   #%  %,  /%   #%%%%%%%%%%%  
  *%%%%%%%%%%%(  .#   #     ,%   %   %%%%%%%%%%%  
  %%%%%%%%%%%   %,  /%   %%   %   ##   #%%%%%%%%* 
  *%%%%%%%%%   #   %           (%   %   %%%%%%%%  
   %%%%%#%   %(  .%%%%%%%%%%%%%%%%%%%%(  .%#%%%#  
    %%%#%   %   %,                         %%%%   
     #%   #%   ...............................    
         %***********************************     
        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%       
          *%%%%%%%%%%%%%%%%%%%%%%%%%%%##.         
              %%%%%%%%%%%%%%%%%%%%%%%             
                    ,%##%%#%%%,                   
`;

description1 = `If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)`;

description2 = `A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this exercise, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 The Challenge:
Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.`;

description3 = `Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples
maskify("4556364607935616") ==> "############5616" maskify("64607935616") ==> "#######5616"
maskify("1") ==> "1" maskify( "") ==> ""
// "What was the name of your first pet?"
maskify("Skippy") ==> "##ippy" maskify("Nananananananananananananananana Batman!") ==> "####################################man!"`;

description4 = `A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.`;

description5 = `Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 "aabbcde" -> 2 "aabBcde" -> 2 "indivisibility" -> 1 "Indivisibilities" -> 2 "aA11" -> 2 "ABBA" -> 2
# no characters repeats more than once
# 'a' and 'b'
# 'a' occurs twice and 'b' twice ('b' and 'B') # 'i' occurs six times
# 'i' occurs seven times and 's' occurs twice # 'a' and '1'
# 'A' and 'B' each occur twice`;

//Solves the Problem01
function problem1(number) {
  let acumulator = 0;
  for (number--; 0 < number; number--) {
    if (number % 3 == 0 || number % 5 == 0) {
      acumulator += number;
    }
  }
  return acumulator;
}

//Solves the Problem02
function problem2(value) {
  let l = `${value}`.length;
  let sum = 0;
  for (let i = 0; i <= l; i++) {
    sum = sum + "".concat(value).substring(i, i + 1) ** l;
  }
  return value == sum ? true : false;
}

//Solves the Problem03
function problem3(cc) {
  let l = `${cc}`.length;
  cc = `${cc}`.substring(l - 4, l);
  for (l - 4; 0 < l - 4; l--) {
    cc = "#" + cc;
  }
  return cc;
}

//Solves the Problem04
function problem4(string = "") {
  var regex = /([a-z])(?!.+\1)/g;
  return string.toLowerCase().match(regex).length === 26;
}

//Solves the Problem05
function problem5(text) {
  firstTime = [];
  repeated = [];
  for (let i = 0; i < `${text}`.length; i++) {
    string = `${text}`.toLowerCase().substring(i, i + 1);
    if (!firstTime.includes(string)) {
      firstTime.push(string);
    } else {
      repeated.push(string);
    }
  }
  uniqs = [...new Set(repeated)];
  return uniqs.length;
}

//Because console.log is too long
function print(string) {
  console.log(string);
}

function assert(assertion) {
  if (assertion) {
    print(" ✓ Pass, got " + outputs[i] + " for input " + inputs[i]);
    return assertion;
  }
  print(" x Failed, expected " + outputs[i] + " for input " + inputs[i]);
  return assertion;
}

function testProblem1() {
  inputs = [10, 200];
  outputs = [23, 9168];
  print("Problem1 tests: ");
  for (i = 0; i < inputs.length; i++) {
    assert(problem1(inputs[i]) == outputs[i]);
  }
}
function testProblem2() {
  inputs = [153, 1634, 222, 2540];
  outputs = [true, true, false, false];
  print("Problem2 tests: ");
  for (i = 0; i < inputs.length; i++) {
    assert(problem2(inputs[i]) == outputs[i]);
  }
}
function testProblem3() {
  inputs = ["4556364607935616", "1", "2222", "22223"];
  outputs = ["############5616", "1", "2222", "#2223"];
  print("Problem3 tests: ");
  for (i = 0; i < inputs.length; i++) {
    assert(problem3(inputs[i]) == outputs[i]);
  }
}

function testProblem4() {
  inputs = [
    "The quick brown fox jumps over the lazy dog.",
    "Te quick brown fox jumps over te lazy dog.",
  ];
  outputs = [true, false];
  print("Problem4 tests: ");
  for (i = 0; i < inputs.length; i++) {
    assert(problem4(inputs[i]) == outputs[i]);
  }
}

function testProblem5() {
  inputs = [
    "abcdee",
    "Indivisibility",
    "aabBcde",
    "Indivisibilities",
    "baaAAB",
  ];
  outputs = [1, 1, 2, 2, 2];

  print("Problem5 tests: ");
  for (i = 0; i < inputs.length; i++) {
    string1 = inputs[i];
    string2 = outputs[i];
    assert(problem5(string1) == string2);
  }
}
function testEverything() {
  print(gapIcon);
  print("Hello");
  print("Testing everything");
  testProblem1();
  testProblem2();
  testProblem3();
  testProblem4();
  testProblem5();
}

testEverything();
