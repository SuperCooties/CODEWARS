//https://www.codewars.com/kata/56170e844da7c6f647000063

function peopleWithAgeDrink(age) {
    //kids drink toddy
    const kids = 14;
    //teens drink coke
    const teens = 18;
    //young adults drink beer
    const youngAdults = 21;
    //adults drink whisky
    const Adults = 9999; //Not actually needed, this is the default
    
    switch(true) {
        case (age < kids): return 'drink toddy';
        case (age < teens): return 'drink coke';
        case (age < youngAdults): return 'drink beer';
        default: return 'drink whisky';
    }
    
    return 'Something went wrong!';
  };