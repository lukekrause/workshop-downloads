// YOUR CODE BELOW
function cloneMachine(object) {
    let objectClone = {}
    Object.assign(objectClone, object)

// let returnObject = {}
for (let key in object)
    objectClone.key = object.key

    console.log(objectClone.offspring)
    
    objectClone.name += 'Clone'
    
    object.offspring.push(objectClone.name)

    console.log(object.offsping)

return objectClone
    
}