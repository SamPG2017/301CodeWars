function insertDash(num) {
  var initialStr = '';
  initialStr = initialStr + num;
  var outputStr = '';
  
  for (var i = 0; i < initialStr.length; i++) {
    outputStr += initialStr.charAt(i);
  
    console.log('iteration' + i + ' outputStr:' + outputStr);
  
    var parsedInt = parseInt(initialStr.charAt(i));
  
    if(parsedInt % 2 === 1) {
      var parsedInt2 = parseInt(initialStr.charAt(i + 1));
      if(parsedInt2 % 2 === 1) {
        outputStr += '-';
      }
      console.log('i: ' + i + ' initialStr.length: ' + initialStr.length);
    }
  }
  return outputStr;
}