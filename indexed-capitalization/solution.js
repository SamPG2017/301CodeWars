function capitalize(s,arr){

  let inputArray = s.split('');
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < inputArray.length) {
        
      inputArray[arr[i]] = inputArray[arr[i]].toUpperCase();
      }
      
   outputString = inputArray.join('');
  }
    return outputString;
}

  capitalize("abcdef",[1,2,5]);
  