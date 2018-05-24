function high(x){

  // split the string into an array first
  let wordArray = x.split(' ');
  // console.log('LINE 142 - arr: ' + wordArray);
  
// set variables for stuff to be determined later
let highScore = 0;
let highWord = '';
  
  // set up outer for loop to loop through all words in the array created above
  for (let i = 0; i < wordArray.length; i++) {
    let wordScore = 0;
    let currentWord = wordArray[i];
    
      // set up inner for loop to iterate through all the letters in each word 
      for (let j = 0; j < currentWord.length; j++){
      
      // assign values to letters one at a time
      // add each letter to the one before and return a running score (wordScore)
      
      wordScore += currentWord.charCodeAt(j) - 96;
      // console.log('LINE 155 wordScore: ' + wordScore);
      }
      
  console.log('currentWord: ' + currentWord);
  console.log('wordScore: ' + wordScore);
  
// compare the highScore value to wordScore above and determine which is the highest value
    if (wordScore > highScore) {
    highWord = currentWord;
    highScore = wordScore;
    }
  }

// return the word with the highest value
  return highWord;
  }