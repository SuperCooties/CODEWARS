//https://www.codewars.com/kata/54fe05c4762e2e3047000add

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function() {
      let loot = (draft - (crew * 1.5));
      if (loot > 20) {
        return true
      } else {
        return false
      }
    }
  }