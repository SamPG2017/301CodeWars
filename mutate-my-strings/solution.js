function mutateMyStrings(stringOne, stringTwo){
  // convert both strings to array using a method

  let oneArray = stringOne.split('');
  let twoArray = stringTwo.split('');

  //create a empty array to keep track of each word step
  // name the array something about new words
  
  let newWords = [];
  
  // within a for loop - going through every element in the array/s
  // That's weird.  Bubble gum doesn't get pushed in as the first word
  // Okay -- push in "bubble gum" as the first word set before the for
  // loop runs
    
   newWords.push(stringOne);
    
  for (let i = 0; i < oneArray.length; i++) {
    
  // go through array one to find out which character is at which index
  // go through array two to find out which character is at which index
  
      if (oneArray[i] != twoArray[i]) {
      
  // if they are different, replace the character in the first array with 
  // the character at the same index in the second array
    
    oneArray[i] = twoArray[i];
    // because the if conditional requires a change to return the word
    // there will never be a word return if the two characters at the
    // same index match.
    
    // replace arr.one[i] with arr.two[i]
  
    // join the array into a string here
    let changedWord = oneArray.join('');    
     newWords.push(changedWord);
      };
    
  // if they are the same, leave the character untouched
    };
  
  // return the string
  // the string needs to be joined with a \n newline
  // AND the dadburn string also needs another \n newline at the very end
  
  return (newWords.join('\n') + '\n');
 
}