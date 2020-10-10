// YOUR CODE BELOW

function myJoin(array, separator = ',') {
    let newString = ''
   
    for (let i = 0; i < array.length; i++) {
      let arrayI = array[i]
      if (arrayI === undefined || arrayI === null) {
        arrayI = ''
      }
      if (i < array.length-1) {
        newString += arrayI + separator
      } else {
        newString += arrayI
      }
      } return newString
  } 