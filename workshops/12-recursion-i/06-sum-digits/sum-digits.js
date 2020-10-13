// YOUR CODE BELOW
function sumDigits(num){  
    // base case
    if(num === 0) return 0;
    let numString = String(num);
    return Number(numString[0]) + sumDigits(Number(numString.slice(1)));
  }