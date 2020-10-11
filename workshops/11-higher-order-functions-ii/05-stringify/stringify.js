// YOUR CODE BELOW
function stringify(callback) {
    return function() {
        
    let string = JSON.toString(callback)
    console.log(string)
    return string
    }
  }
  
  function returnsANumber() {
    return 100;
  }
  
  let newFunction = stringify(returnsANumber);
  newFunction(); // => '100'
  