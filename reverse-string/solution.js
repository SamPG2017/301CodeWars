function solution(str){
  // make empty array here as var
  let result = [];
  
  // set up for loop that decrements
 // for loop starts at the index of the string
 // length -1 because the string length is 6, 
 // but the index of the last character is 5.
    
  for (var i = str.length - 1; i >= 0; i--) {
    // the character of the passed-in string
    // at index gets pushed into an array 
    result.push(str.charAt(i));
  }
  return result.join("");
}

// https://codereview.stackexchange.com/
// questions/133769/reverse-string-in-javascript-
// without-using-reverse?utm_medium=organic&utm_
// source=google_rich_qa&utm_campaign=google_rich_qa

// Found the solution above, but walked through & 
// commented the code so I understand how 
// it works/worked.  