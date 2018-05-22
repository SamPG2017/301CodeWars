function cubeOdd(arr) {

  let cubedProduct = 0;
  for (i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
    return undefined;
    }
    
    if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
      cubedProduct += (arr[i] * arr[i] * arr[i]);
      }
    
    }
  return cubedProduct 
}