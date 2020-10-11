// YOUR CODE BELOW
function finderFunction(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i
        } 
    } return -1
}


// function callBackFunc(elements) { 
//     if 
// }

//arr.forEach(callback(currentValue[, index[, array]]) {

