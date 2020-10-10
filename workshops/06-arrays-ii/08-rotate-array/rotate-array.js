// YOUR CODE BELOW

function rotateArray(originalArray, rotateNum){
    if (rotateNum > 0) {
      for (let i = 0; i < rotateNum; i++) {
        let letLast = originalArray.pop()
        originalArray.unshift(letLast)
      } 
    } else {
      for (let i = 0; i > rotateNum; i--) {
        let letFirst = originalArray.shift()
        originalArray.push(letFirst)
      } 
    }
    return originalArray
  }
  