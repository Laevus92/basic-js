const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result
  if (date === undefined) {
    result = 'Unable to determine the time of year!'
  } else if (date instanceof Date === false || date.toString() === Date.prototype.toString.call(new Date())) {
      throw new Error('Invalid date!')
  } else {
    let month = date.getMonth()
    if (month >= 2 && month < 5) {
      result = 'spring'
    } else if (month >= 5 && month < 8) {
        result = 'summer'
    } else if (month >= 8 && month < 11) {
        result = 'autumn'
    } else {
        result = 'winter'
    }
  }
  return result
}

module.exports = {
  getSeason
};
