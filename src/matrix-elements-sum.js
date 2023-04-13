const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newMatrix = []
  let result = 0
  for (let i = 0; i < matrix[0].length; i++){
      let a = ''
      for (let k = 0; k < matrix.length; k++){
          a = a + matrix[k][i]
      }
      newMatrix.push(a.split('').map(el => +el))
  }
  
  for (let i = 0; i < newMatrix.length; i++){
      for (let k = 0; k < newMatrix[i].length; k++){
          if (newMatrix[i][k] !== 0 && (newMatrix[i][k - 1] !== 0 || newMatrix[i][k - 1] === undefined)) {
              result = result + +newMatrix[i][k]
          } 
  }
}
return result
}

module.exports = {
  getMatrixElementsSum
};
