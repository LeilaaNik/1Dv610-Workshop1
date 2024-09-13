/**
 * This is the main entry point of the code.
 *
 * @author Leila Nikkheslat <ln223kd@student.lnu.se>
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
 * @version 1.0.0
 */

// Function that counts the number of vowels in a string.
function countVowels (str) {
  let count = 0;
const lowerCaseStr = str.toLowerCase();

for (let char of lowerCaseStr) {
  if ('aeiou'.includes(char)) {
    count++;
  }
}
return count;
}

const inputString = 'Welcome to our Workshop!';
const vowelCount = countVowels(inputString);
console.log(`${inputString} has ${vowelCount} vowels`);

// Function that prints the vowels in a string.
function printVowels (str) {
  const lowerCaseStr = str.toLowerCase();
  let vowels = '';

  for (let char of lowerCaseStr) {
    if ('aeiou'.includes(char)) {
      vowels += char;
    }
  }

  return vowels;
}

const print = printVowels(inputString);
console.log(`${inputString} has the following vowels: ${print}`);

// Function that finds the index of the vowels in a string.
function findVowelsIndex (str) {
  const lowerCaseStr = str.toLowerCase();
  let index = [];

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if ('aeiou'.includes(lowerCaseStr[i])) {
      index.push(i);
    }
  }

  return index;
}

const index = findVowelsIndex(inputString);
console.log(`The vowels in "${inputString}" are at the following indexes: ${index}`);

// Function that counts the number of consonants in a string.
function countConsonants (str) {
  let count = 0;
  const lowerCaseStr = str.toLowerCase();

  for (let char of lowerCaseStr) {
    if ('bcdfghjklmnpqrstvwxyz'.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(countConsonants(inputString));
