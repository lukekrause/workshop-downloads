// YOUR CODE BELOW

/*### Make Grid

Write a function `makeGrid` that accepts two arguments:
1. numColumns (number)
2. numRows (number)

`makeGrid` should return a two-dimensional array that represents a grid of the
given dimensions.

```javascript
makeGrid(3,4);
 => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/



function makeGrid(num1, num2) {
    let newArray = [];
    let newArray2 = [];
   for (let i = 1; i <= num1; i++) {
    newArray.push(i)
   } for (let i = 1; i <= num2; i++) {
     newArray2.push(newArray)
  } return newArray2
}

makeGrid(3, 4)