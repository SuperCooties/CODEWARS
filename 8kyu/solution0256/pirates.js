//https://www.codewars.com/kata/5748a883eb737cab000022a6

const cannonsReady = (gunners) => {
    for (const [key, value] of Object.entries(gunners)) {
      if (value === "nay") {
        return "Shiver me timbers!";
      }
    }
    return "Fire!";
  }