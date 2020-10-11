// YOUR CODE BELOW
let myForEach = (arrayFunc, callback) => {

    for (let i = 0; i < arrayFunc.length; i++) {

     let element = arrayFunc[i];
    
    callback(element, i)
    
    }

}