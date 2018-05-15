function isNice(arr){

  if (arr.length === 0) {
  return false;
  }
  
  for (var i = 0; i < arr.length; i++) {
  var found = false;
  
    for (var j = 0; j < arr.length && !found; j++) {
      if (arr[i] === arr[j] - 1 || arr[i] === arr[j] + 1) {
        found = true;
        }
      }
    if (!found) {
      return false;
      }
    }
    return true;
  }