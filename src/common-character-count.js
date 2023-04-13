const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let counter = 0
  let arr = []
  arr.push(str1.split(''))
  arr.push(str2.split(''))
  arr = arr.join().split(',')
  let uniqChars = arr.filter((char, index, chars) => chars.indexOf(char) !== index).filter((char, index, chars) => chars.indexOf(char) === index);
  
  for (let i = 0; i < uniqChars.length; i++) {
      let a = str1.split('').filter(el => el === uniqChars[i]).length
      let b = str2.split('').filter(el => el === uniqChars[i]).length
      if (a > b) {
          counter = counter + b
      } else {
           counter = counter + a
      }
  }
  return counter
  }

module.exports = {
  getCommonCharacterCount
};
