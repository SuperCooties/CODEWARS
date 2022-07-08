//https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor){
    for (let i = 0; i < numbers.length; i++){
      console.log(`Processing ${numbers[i]}/${divisor}... (${numbers[i]%divisor})`);
      if (numbers[i] % divisor === 0){
        console.log(`${numbers[i]} is divisible by ${divisor} so it stays...`);
      } else {
        console.log(`${numbers[i]}/${divisor} has a remainder of ${numbers[i]%divisor}, splicing out the ${numbers[i]}...`);
        numbers.splice(i, 1);
        i--;
      }
    }
    return numbers;
  }