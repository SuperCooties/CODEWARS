//https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
    const avgGrade = (s1 + s2 + s3) / 3
    
    switch (true) {
        case (avgGrade >= 90): return 'A';
        case (avgGrade >= 80): return 'B';
        case (avgGrade >= 70): return 'C';
        case (avgGrade >= 60): return 'D';
        case (avgGrade >= 0): return 'F';
        default: console.log('Invalid grade?!');
    }
  }