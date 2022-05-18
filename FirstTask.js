
// Task 1


/*Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and
9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the
number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is
negative, return 0(for languages that do have them)
*/

function SolutionProblem1(n)
{
   sum =0;
   if(n>0)
   {
        for(i=1;i<n;i++)
        {
            if(i%5===0 || i%3===0)
            {
            sum=sum+i;
            }
        }
    }else
    {
        return sum;
    }
  return sum;
}


/* Problem 2
A Narcissistic Number is a positive number which is the sum of its own digits, each
raised to the power of the number of digits in a given base. In this exercise, we will
restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:
Your code must return true or false depending upon whether the given number is a
Narcissistic number in base 10.
Error checking for text strings or other invalid inputs is not required, only valid positive
non-zero integers will be passed into the function.
*/

function SolutionProblem2(n)
{
  stringNum= n.toString();
  numSize=stringNum.length;
  sum =0;

  for(i=0; i<numSize ; i++)
  {
      digit=stringNum[i];
      exp = Math.pow(parseInt(digit),numSize);
      sum = sum + exp;
  }

  return sum===n;
}


/* Problem 3
Usually when you buy something, you're asked whether your credit card number, phone
number or answer to your most secret question is still correct. However, since someone
could look over your shoulder, you don't want that shown on your screen. Instead, we
mask it.
Your task is to write a function maskify, which changes all but the last four characters
into '#'.
Examples
maskify("4556364607935616") ==> "############5616"
maskify("64607935616") ==> "#######5616"
maskify("1") ==> "1"
maskify( "") ==> ""
// "What was the name of your first pet?"
maskify("Skippy") ==> "##ippy"
maskify("Nananananananananananananananana Batman!") ==>
"####################################man!"
*/

function SolutionProblem3(n)
{
  text=n.toString();
  textSize = text.length;console.log(textSize)
  maskyfy ="";
  if(textSize>4)
  { console.log("iff")
        for(i=0; i<=textSize-5; i++)
        {
            maskyfy = maskyfy + "#";

        }
        maskyfy = maskyfy + text.substr(textSize-4,textSize-1);
        return maskyfy;
  }else
  { console.log("else")
    return text;
  }
}

/*Problem 4
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
Ignore numbers and punctuation.
*/

function SolutionProblem4(input)
{
  text=input.toString().toUpperCase();
  const leters = "ABCDFGHIJKLMNOPQRSTUVWXYZ";
  for(i=0; i<leters.length; i++)
  {
    if(!text.includes(leters[i]))
    {
        return false;
    }
  }
  return true;
}

/* Problem 5
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic
characters and numeric digits that occur more than once in the input string. The input
string can be assumed to contain only alphabets (both uppercase and lowercase) and
numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function SolutionProblem5(input)
{
  text=input.toString().toUpperCase();
  lettersCount = 0;
  for(i=0; i<text.length; i++)
  {
      copyText = text.substr(i+1,text.length-1)
    if(copyText.includes(text[i]))
    {
        lettersCount ++; 
        text=text.replaceAll(text[i], "");
    }
  }
  return lettersCount;
}
