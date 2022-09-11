//https://www.codewars.com/kata/53f1015fa9fe02cbda00111a

var Ghost = function() {
    let colour = "";
    
    //create a random number between 1 and 4 for our four colours
    let randomColour = Math.ceil(Math.random() * 4);
    console.log(`randomColour: ${randomColour}`);
    
    //based on the number, assign the colour to the colour variable
    randomColour === 1 ? colour = 'white' :
    randomColour === 2 ? colour = 'yellow' :
    randomColour === 3 ? colour = 'purple' :
    randomColour === 4 ? colour = 'red' :
    colour = 'ERROR'
    
    //assign that sucker
    console.log(`color: ${colour}`);
    this.color = colour;
  };