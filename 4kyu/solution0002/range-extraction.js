//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){
    // TODO: complete solution 
     
     //create the result string
     let result = '';
     //add the first integer to it
     result += list[0];
     let indexTracker = 1;
     
     for (let i = 1; i < list.length; i++) {
       if (i === indexTracker) {
         let j = i;
           while ((list[j] - list[j-1]) === 1 && j < list.length) {
             j++;//count up until our number is not sequential
           }
         indexTracker = j;
         if (i === indexTracker) {
           result += ',' + list[indexTracker];
           indexTracker++;
         } else {
           indexTracker--;//when we found the non-sequential number, we went past it, need to back up once
           console.log(`indexTracker is ${indexTracker}, list[indexTracker] is ${list[indexTracker]}. i is ${i}`);
           if (i === indexTracker) {
             result += ',' + list[indexTracker];
             indexTracker++;
           } else {
             result += '-' + list[indexTracker];
             indexTracker++;
           }
         }
       }  
     }
     return result;
   }