// YOUR CODE BELOW
function callThemAll(object, value) {
    let newArr = [];

    for (let element in object) {
        
        if(typeof object[element] === 'function'){
            let newCall = object[element]
        newArr.push(newCall(value))
        }
    }
    return newArr
}


// let addNums = {
//     addTen: function (num) {
//         return num + 10;
//     },
//     addTwenty: function (num) {
//         return num + 20;
//     },
//     someProperty: 'value'
// };







// callThemAll(addsNums, 10)
// //


// let addsNums = {
//     addTen: function(num) {
//       return num + 10;
//     },
  
//     addTwenty: function(num) {
//       return num + 20;
//     },
  
//     someProperty: 'value'
//   };


