const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let catsCount = 0;
  backyard = backyard.join().split(',')
  for (let i = 0; i < backyard.length; i++) {
      if (backyard[i] === '^^') {
          catsCount += 1
      }
  }
  return catsCount
}

module.exports = {
  countCats
};
