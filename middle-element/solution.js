var gimme = function (inputArray) {
 
  let gimmeMax = (Math.max(...inputArray));
   console.log('gimmeMax: ' + gimmeMax);
  let gimmeMin = (Math.min(...inputArray));
    console.log('gimmeMin: ' + gimmeMin);   
    
  for (var i = 0; i < inputArray.length; i++) {
  
    if (gimmeMax != inputArray[i] && gimmeMin != inputArray[i]) {
      return i;
    }
  }
};