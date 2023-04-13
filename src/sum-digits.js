const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  let length = num.toString().length
  let newNum = 0
  if( length > 1) {
      for(let i = 0; i < length; i++) {
          newNum += +num.toString()[i]
      }
      return getSumOfDigits(newNum)
  } else {
     return num;
  }
  }

module.exports = {
  getSumOfDigits
};
