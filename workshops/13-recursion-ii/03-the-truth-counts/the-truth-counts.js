// YOUR CODE BELOW
function theTruthCounts(array) {
    
    let counter = 0

    for (let element of array) {
        if (Array.isArray(element)) {
            counter += theTruthCounts(element)
            
        } else if (element) {
            counter++
        }
    }
    return counter 
}