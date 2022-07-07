//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

//var humanYearsCatYearsDogYears = function(humanYears) {
    function humanYearsCatYearsDogYears(humanYears){
        let catYears = 0;
        let dogYears = 0;
        
        let catFirstYear = 15;
        let catSecondYear = 9;
        let catThreePlusYear = 4;
        
        let dogFirstYear = 15;
        let dogSecondYear = 9;
        let dogThreePlusYear = 5;
        
        for (let i = 0; i < humanYears; i++){
          console.log(`i: ${i}`);
          if (i === 0){
            catYears += catFirstYear;
            dogYears += dogFirstYear;
          } else if (i === 1) {
            catYears += catSecondYear;
            dogYears += dogSecondYear;
          } else {
            catYears += catThreePlusYear;
            dogYears += dogThreePlusYear;
          }
        }
        
        return [humanYears,catYears,dogYears];
      }
      