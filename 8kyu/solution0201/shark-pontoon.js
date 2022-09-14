//https://www.codewars.com/kata/57e921d8b36340f1fd000059

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  
    //check for dolphin bonus
    dolphin ? sharkSpeed /= 2 : null;
    
    //set the times
    let sharkTime = sharkDistance / sharkSpeed;
    let myTime = pontoonDistance / youSpeed;
    
    return (myTime < sharkTime) ? "Alive!" : "Shark Bait!"
  }