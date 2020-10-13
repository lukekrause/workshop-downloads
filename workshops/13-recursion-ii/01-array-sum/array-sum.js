// YOUR CODE BELOW
// function arraySum(array) {
//   let sum = 0
//   if(array.length === 1 ) return array[1]
  
//   for (let element of array) {
 
//     if(Array.isArray(element)) {
//       sum += arraySum(element)
//     } sum += element
 
//   } 
//     return sum
// }

function arraySum(array) {
    let result = 0;
    for (let element of array) {
        if (Array.isArray(element)) {
            result += arraySum(element);
        } else {
            result += element;
        }
    }
    return result;
}
