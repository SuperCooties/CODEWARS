//https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

function whoIsPaying(name){
    if (name.length <= 2) {
      return [name]
    }
    
    return [name, name[0] + name[1]]
  }