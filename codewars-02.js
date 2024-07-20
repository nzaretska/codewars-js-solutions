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

/*DNA to RNA Conversion
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells.
RNA differs slightly from DNA its chemical structure and contains no Thymine.
In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
For example:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty.
All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
*/

function DNAtoRNA(dna) {
 return dna.replace(/T/g, "U");
}

/*Find Maximum and Minimum Values of a List
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.
https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
*/


https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
Додаткові задачки по JS, щоб формувати навички, якщо маєте час і бажання 🙂
Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript


/*Twice as old
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let distance=0;
  if ((dadYearsOld+distance) > (sonYearsOld+distance) * 2) {
    while ((dadYearsOld+distance) !== (sonYearsOld+distance) * 2) {
        distance++;
    }
  }
  else if ((dadYearsOld+distance) < (sonYearsOld+distance) * 2) {
    while ((dadYearsOld+distance) !== (sonYearsOld+distance) * 2) {
        distance--;
    }
  }
  return Math.abs(distance)
}
//----------------------------------------------------------------------------
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
