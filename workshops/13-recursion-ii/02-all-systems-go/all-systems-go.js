// YOUR CODE BELOW
function allSystemsGo(object) {
    let trueVal = true
    
    for (let key in object) {
        let value = object[key]
        if (typeof value === 'object') {
            trueVal = trueVal && allSystemsGo(value);
        } else if (!value) {
            return false
        }
    }
    return trueVal
   
}

// function allSystemsGo(checks) {
//     let result = true;
//     for (let spec in checks) {
//         let value = checks[spec];
//         if (typeof value === 'object') {
//             result = result && allSystemsGo(value);
//         } else if (!value) {
//             return false;
//         }
//     }
//     return result;
// }