function abbrevName(name){
  let splitName = name.split('');
  let answer = '';
  
  answer += splitName[0].toUpperCase();
  answer += '.';
  answer += splitName[splitName.indexOf(' ')+1].toUpperCase();
  
  return answer
  }