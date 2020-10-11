// YOUR CODE BELOW
// YOUR CODE BELOW
function deeperCopy(array) { 
     let newArray = array.slice();  
     for (let i = 0; i < newArray.length; i++) {  
           let element = newArray[i];   
            if (Array.isArray(element)){    
                  let copyArray = [];     
                   for (let y = 0; y < element.length; y++) {       
                        copyArray.push(element[y]);     
                    }   
                newArray[i] = copyArray;   
            } 
    } 
    console.log(newArray);  
    return newArray;
 }
 