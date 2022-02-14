//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

function cockroachSpeed(s) {
    //1 hour = 60 minutes = 3600 seconds
    //1 km = 1000 m = 100000cm
    
    const cmPerSec = (100000 / 3600);
    
    return Math.floor(s * cmPerSec);  
  }