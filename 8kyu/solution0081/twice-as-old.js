//https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dadYearsOld, sonYearsOld) {

    const diff = dadYearsOld - sonYearsOld;
    
    //Check if already double
    if (sonYearsOld * 2 === dadYearsOld) {
      return 0;
    }
    
    //Check if over double
    if (dadYearsOld > (sonYearsOld * 2)){
       return diff - sonYearsOld;  
    }
    
    return sonYearsOld - diff;
  }