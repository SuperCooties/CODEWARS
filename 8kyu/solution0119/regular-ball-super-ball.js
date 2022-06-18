//https://www.codewars.com/kata/53f0f358b9cb376eca001079

var Ball = function(ballType) {
    if (!ballType) {
      this.ballType = "regular";
    } else {
      this.ballType = ballType;
    }
  };