const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let result = []
  let counter = 1
  for (let i=0; i<string.length; i++) {
      if (string[i] === string[i+1]) {
          counter += 1
      } else {
          if(counter === 1) {
              result.push(string[i])
              counter = 1
          } else {
              result.push(counter+string[i])
              counter = 1
          }
      }
  }
return result.join('')
}

module.exports = {
  encodeLine
};
