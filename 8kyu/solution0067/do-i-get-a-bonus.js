//https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
    return `\u00A3${(bonus) ? salary *= 10 : salary}`
  }