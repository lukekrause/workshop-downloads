// YOUR CODE BELOW
function billerBuilder(stateName) {
    if (stateName === 'NY') {
       return function(num) {
           return num * 1.03 * 1.04
       }
    }
    if (stateName === 'NJ') {
        return function(num) {
            return num * 1.05 * 1.06625

    }
}
}
