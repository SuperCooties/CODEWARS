//https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    if (name.length > 0) {
      const firstLetter = name[0];
      
      if (firstLetter.toLowerCase() === 'r') {
        return `${name} plays banjo`
      }
    }
    
    return `${name} does not play banjo`;
  }