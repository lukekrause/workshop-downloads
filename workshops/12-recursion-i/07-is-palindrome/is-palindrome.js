// // YOUR CODE BELOW
// function isPalindrome(string) {
//     if(string.length < 2) {
//         return true
//     }
//     if (string[0] !== string[string.length -1]){
//         return false
//     } else {
//         return isPalindrome(string.slice(1, string.length - 1))

//     }

// }

function isPalindrome(string){
    //base case
    if(string.length < 2) return true;
    if(string[0] !== string[string.length - 1]) return false;
    return isPalindrome(string.slice(1, string.length - 1));
  }