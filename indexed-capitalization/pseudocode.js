// Problem Domain

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.


// Pseudocode

  // take in a string and convert it to an array
  // name the array something and set it as a variable
  
  // use a for loop to iterate through the initial array
  // for (let i = 0; i < inputArray.length; i++) {
  
  // find the index of each element -- why ?  we know
  // the indexes of each element in the array. . . so, no.
  
      // make sure that the value is a valid index number
      // if it is a valid index, 
      
  // compare it to the second array
  // if the second array has a number that matches
  // an index location, convert the letter to a capital
  
  // Okay.  HOW do I get the value of the index in an array
  // and not the <index> number ?  
  // IndexOf doesn't work here.  How else to do this ?
  
  // figure out HOW to structure the inner array to be
  // looped through and return the correct character to
  // be uppercased.  
    // inputArray[ arr [i]] is the inputArray character that
    // matches at 0, 1, 2 which translates to 1, 2, 5 which
    // then translates to b, c, f in the inputArray
  
        // arrindex =       0, 1,       2
        // arr =            1, 2,       5
        //               0, 1, 2, 3, 4, 5
        // inputArray =  a, b, c, d, e, f
        
  // join the array back as a string
  
  // return the string