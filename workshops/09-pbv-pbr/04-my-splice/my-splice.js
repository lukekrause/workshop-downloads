// // YOUR CODE BELOW
// let mySplice = (array, startIdx, removed, added) => {
//     let addedElements = [];

//     array[startIdx] = added
//     // console.log(array);
//     array.slice(startIdx, arraylength - removed)


//     for (let i = 0; i < startIdx; i++) {
//         let curElement = array[i];
//     // console.log(addedElements.push(curElement));
//     }
//    return array;
//   }
  
//   let newArr = ['one', 'two', 'three', 'four', 'five']

//  console.log(newArr.slice(0, 1))


function mySplice(array, startIdx, numElemsToDelete, elemToAdd){
    let beginningElemsToKeep = [];
    for(let i=0; i<startIdx; i++){
      beginningElemsToKeep.push(array[i]);
    }

    let elemsToDelete = [];
    for(let i=startIdx; i<startIdx + numElemsToDelete; i++){
      elemsToDelete.push(array[i]);
    }

    let endingElemsToKeep = [];
    for(let i=startIdx + numElemsToDelete; i<array.length; i++){
      endingElemsToKeep.push(array[i]);
    }

    let elemsToAdd = [];
    if(elemToAdd !== undefined){
      elemsToAdd = [elemToAdd]
    }

    while(array.length){
      array.pop();
    }
     // array ~= [];
    for(let i=0; i<beginningElemsToKeep.length; i++){
      array.push(beginningElemsToKeep[i]);
    }

    for(let i=0; i<elemsToAdd.length; i++){
      array.push(elemsToAdd[i]);
    }

    for(let i=0; i<endingElemsToKeep.length; i++){
      array.push(endingElemsToKeep[i]);
    }
    
    return elemsToDelete;
  }