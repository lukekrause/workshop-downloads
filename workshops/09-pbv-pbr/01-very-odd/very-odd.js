// YOUR CODE BELOW

function veryOdd(array) {
    // let newArr = array
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArr.push(array[i])
        // console.log(newArr[i])  
        }
    }
    return newArr
}


// let returnedValue = veryOdd([5, 10, 15, 20])
// veryOdd(returnValue)
