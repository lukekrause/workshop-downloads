

let chainReaction = (value, arrayFunc) => {
  
  arrayFunc.forEach(function(arrayFunc) {
    value = arrayFunc(value);
  })
  return value;
}


    //     } if (funcArray.length < 3) {
    //         let funcRet2 = funcArray[1](funcRet1)
    //         return funcRet2
    //     } if (funcArray.length < 4) {
    //         let funcRet3 = funcArray[2](funcRet2)
    //         return funcRet3
    //     }



