// YOUR CODE BELOW
function countVowels(string) {
    if (string.length === 0) {
     return 0
    }
    let vowelCounter = 0
    let vowels = 'aeiouAEIOU'
    
    if (vowels.includes(string[0])) {
      vowelCounter++
    }  
     let newIndex = string.slice(1)
     return vowelCounter + countVowels(newIndex) 
  }
  
  
  