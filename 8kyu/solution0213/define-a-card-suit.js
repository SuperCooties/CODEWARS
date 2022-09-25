//https://www.codewars.com/kata/5a360620f28b82a711000047

function defineSuit(card) {
    let suit = card[(card.length - 1)];
    console.log(`suit is ${suit}`);
    
    if (suit === '♣') {
      return 'clubs'
    } else if (suit === '♦') {
      return 'diamonds'
    } else if (suit === '♥') {
      return 'hearts'
    } else if (suit === '♠') {
      return 'spades'
    } else {
      return 'ERROR'
    }
  }