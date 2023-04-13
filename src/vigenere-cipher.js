const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined){
      throw new Error('Incorrect arguments!')
    }else {
      const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        str = str.toUpperCase()
        key = key.toUpperCase()
        let arrStr = str.split('')
        let repeats = Math.ceil(arrStr.length / key.length);
        let keyStr = key.repeat(repeats)
        let keyArr = []
        let counter = 0
        let cryptedStr = []
        
        for (let i = 0; i < arrStr.length; i++) {
            if (!alphabet.includes(arrStr[i])) {
                keyArr.push(arrStr[i])
                counter += 1
            } else {
                 keyArr.push(keyStr[i - counter])
            }
        }
        
         for (let i = 0; i < keyArr.length; i++) {
             if (alphabet.includes(keyArr[i])) {
                 let newAlphabet = []
                 let indexOfFirstLetter = alphabet.indexOf(keyArr[i])
                 let indexOfLastLetter = alphabet.length
                 for (let i = indexOfFirstLetter; i < indexOfLastLetter; i++) {
                    newAlphabet.push(alphabet[i])
                 }
                 if (newAlphabet.length < alphabet.length) {
                     for (let i = 0; i < indexOfFirstLetter; i++) {
                         newAlphabet.push(alphabet[i])
                     }
                 }
                 cryptedStr.push(newAlphabet[alphabet.indexOf(arrStr[i])])
             } else {
                 cryptedStr.push(arrStr[i])
             }
         }
         let result = cryptedStr.join('');
         return this.reverse ? result : this._reverseString(result);
    }
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined){
      throw new Error('Incorrect arguments!')
    }else {
      const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      str = str.toUpperCase()
      key = key.toUpperCase()
      let arrStr = str.split('')
      let repeats = Math.ceil(arrStr.length / key.length);
      let keyStr = key.repeat(repeats)
      let keyArr = []
      let counter = 0
      let decryptedStr = []
      
      for (let i = 0; i < arrStr.length; i++) {
          if (!alphabet.includes(arrStr[i])) {
              keyArr.push(arrStr[i])
              counter += 1
          } else {
              keyArr.push(keyStr[i - counter])
          }
      }
      
      for (let i = 0; i < keyArr.length; i++) {
          if (alphabet.includes(keyArr[i])) {
              let newAlphabet = []
              let indexOfFirstLetter = alphabet.indexOf(keyArr[i])
              let indexOfLastLetter = alphabet.length
              for (let i = indexOfFirstLetter; i < indexOfLastLetter; i++) {
                  newAlphabet.push(alphabet[i])
              }
              if (newAlphabet.length < alphabet.length) {
                  for (let i = 0; i < indexOfFirstLetter; i++) {
                      newAlphabet.push(alphabet[i])
                  }
              }
              decryptedStr.push(alphabet[newAlphabet.indexOf(arrStr[i])])
          } else {
              decryptedStr.push(arrStr[i])
          }
      }
      let result = decryptedStr.join('');
      return this.reverse ? result : this._reverseString(result);
    }
  }
  _reverseString(str) {
    return str.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
