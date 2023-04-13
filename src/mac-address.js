const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(macAdress) {
  let result = 0
  macAdress = macAdress.split('-')
  macAdress = macAdress.map(element => element = parseInt(element, 16))
  for (let i = 0; i < macAdress.length; i++){
      if (macAdress[i] >= 0 && macAdress[i] <= 255) {
          result += 1
      } else {
         result -= 1
      }
  }
  return result === 6
}
module.exports = {
  isMAC48Address
};
