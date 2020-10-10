let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
// 1. Define a function called leetTranslator 
// 2. that take a string of normal characters.
function leetTranslator(string) {
// 3. leetTranslator should return a new string
  let newString = ''
 // 4. that is the translation of the original string into leet.
  for (let i = 0; i < string.length; i++){
    for (let j = 0; j < letters.length; j++)
      if (letters[j] === string[i].toLowerCase()) {
        newString += leetChars[j]
    } 
  } return newString
  
}
