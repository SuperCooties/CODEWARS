//https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
    switch (current) {
        case 'green': return 'yellow'; break;
        case 'yellow': return 'red'; break;
        case 'red': return 'green'; break;
        default: console.log('invalid input');
    }  
    console.log('switch cases failed');
  }
  
  