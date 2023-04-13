const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let counter = 0
  let newNamesArr = []
  for(let i = 0; i < names.length; i++) {
      if (newNamesArr.length === 0) {
          newNamesArr.push(names[i])
      } else {
          if (newNamesArr.includes(names[i])){
              for (let k = 0; k < newNamesArr.length; k++) {
                  if (newNamesArr[k] === names[i]) {
                      counter += 1
                  }
              }
              newNamesArr.push(`${names[i]}(${counter})`)
          } else {
              counter = 0
              newNamesArr.push(names[i])
          }
      }
  }
  return(newNamesArr)
}

module.exports = {
  renameFiles
};
