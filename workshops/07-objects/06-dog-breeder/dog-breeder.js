// YOUR CODE BELOW
function dogBreeder(name = 'Steve', age = 0) {
    // typeof name === Number - DOESNT WORK. LOOK IT UP
    if (typeof name === 'number') {

        age = name
        name = 'Steve'
    }
    return {
        name: name,
        age: age
    }

}