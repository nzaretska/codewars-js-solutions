/*Convert a string to an array
Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
*/

function stringToArray(string) {
  let array = [];
  while (string.indexOf(" ") !== -1) {
    array.push(string.slice(0, string.indexOf(" ")))
    string = string.slice(string.indexOf(" ") + 1);
  }
  array.push(string);
  return array
}
//-------------------------------------------------------------------------------
function stringToArray(string){
  return string.split(' ');
}


https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
