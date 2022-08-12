//https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

//Not actually interesting in doing the regex related kata...

function validateUsr(username) {
  
    //Check username length
    const maxLength = 16;
    const minLength = 4;
    if (username.length > maxLength || username.length < minLength) {
      return false
    }
    
    let nameRegex = /^[a-z0-9_\.]+$/
    
    //Check for characters
    
    let res =  nameRegex.test(username) 
    return res
  }