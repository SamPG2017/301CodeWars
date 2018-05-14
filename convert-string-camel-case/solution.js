function toCamelCase(str){
  
  var res = str.split(/[-_]/);
  
  var upperResult = res[0]; 
  for (var i = 1; i < res.length; i++) {
    upperResult += res[i].charAt(0).toUpperCase() + res[i].substr(1);
  }
  return upperResult;
}
// toCamelCase();

