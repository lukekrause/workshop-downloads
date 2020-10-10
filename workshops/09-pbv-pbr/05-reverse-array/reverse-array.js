// YOUR CODE BELOW
let reverseArray = (array) => {
    let newArray = [];
    
    while (array.length) {
      newArray.push(array.pop());
    }
    while (newArray.length) {
      array.unshift(newArray.pop());
    }
    return array;
  }