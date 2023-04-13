const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let arr = [];
  let length = number.toString().length
  for (let i = 0; i < length; i++) {
     let newNumber = number.toString().split('')
     newNumber.splice(i, 1)
     arr.push(newNumber.join(''))
  }
 
  return Math.max.apply(null, arr.map(el => +el))
 }

module.exports = {
  deleteDigit
};
