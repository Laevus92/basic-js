const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if(('addition' in options) === false) {
      options['addition'] = ''
  }
  if(('additionSeparator' in options) === false) {
      options['additionSeparator'] = '|'
  }
  if(('separator' in options) === false) {
      options['separator'] = '+'
  }
  
  if(('additionRepeatTimes' in options) === false) {
      options['additionRepeatTimes'] = 1
  }
  
  if(('repeatTimes' in options) === false) {
      options['repeatTimes'] = 1
  }
  
  
  let addition = (`${options['addition']}` + `${options['additionSeparator']}`).repeat( options['additionRepeatTimes']).split('')
  addition = addition.slice(0, (addition.length -  options['additionSeparator'].length)).join('')
  let result = (`${str}` + addition + `${options['separator']}`).repeat(options['repeatTimes']).split('')
  result = result.slice(0, (result.length - options['separator'].length)).join('')

  return result
}

module.exports = {
  repeater
};
