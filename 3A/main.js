// What does the countChar function do?
/* 
The function countChar returns the number of character ch in string by storing it using the variable counted,
 then returning it at the end of the function. 
*/

// What is string and ch?
// Sting and ch are arguments.
function countChar(string, ch) {
  let counted = 0;

  /*
    The for loop is used to find the number of the occurance of argument ch in string.
    The counter named i increases every time the for loop iterates through the string.
    The if checks if one of the characters of string is equal to ch. If it is, then counted is increased by one. 
  */
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}
//What does the countBs function do?
/* 
  The countBs function returns the number of times "B" shows up in the argument string.
  It first receives string, and calls countChar, with the string that it received earlier, and "B" as ch.
  When it goes to countChar and returns, it will bring back the number of times that "B" has showed up in string, and return it.
*/
function countBs(string) {
  return countChar(string, "B");
}

//What is the output to console.log()
// The result is 2, which is the number of times that "B" is repeated in "BBC",
console.log(countBs("BBC"));

// The result is 4, which is the number of times "k" is repeated in "kakkerlak".
console.log(countChar("kakkerlak", "k"));
