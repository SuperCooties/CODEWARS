//https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    const total = classPoints.reduce((prev, curr) => prev + curr, 0);
    const average = total / classPoints.length;
    return yourPoints > average;
  }
  