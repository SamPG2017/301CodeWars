function validateUsr(username) {
  //   let res =  /\w?\d?_?/.test(username)                    // does not pass 2, 3, 4, 5, 7, 9
  //   let res =  /[^A-Z]{4,16}_?^\s/.test(username)      // does not pass 1, 6, 8, 10
  //   let res =  /[^A-Z]{4,16}_? ?/.test(username) // does not pass 4, 9
  //   let res = /[a-z0-9_]{4,16}/.test(username); // does not pass 4, 9
  //   let res = /[a-z0-9_][^A-Z]{4,16}/.test(username); // does not pass 4, 6, 9
  //   let res = /[a-z0-9_]{4,16}/.test(username); // does not pass 4, 9
  //   let res = /^[a-z0-9_]{4,16}$/.test(username);
   return /^[a-z0-9_]{4,16}$/.test(username);
  }