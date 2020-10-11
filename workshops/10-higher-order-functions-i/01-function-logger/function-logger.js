// YOUR CODE BELOW
function functionLogger(func, num) {
    console.log('Function starting')
    if(func(num)) {
    console.log('Function complete')
    return func(num)
    // return func(num)
    }
    
}