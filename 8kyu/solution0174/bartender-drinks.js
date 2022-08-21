//https://www.codewars.com/kata/568dc014440f03b13900001d

function getDrinkByProfession(param){
    param = param.toLowerCase()
    return (param === "jabroni") ? "Patron Tequila" :
          (param === "school counselor") ? "Anything with Alcohol" :
          (param === "programmer") ? "Hipster Craft Beer" :
          (param === "bike gang member") ? "Moonshine" :
          (param === "politician") ? "Your tax dollars" :
          (param === "rapper") ? "Cristal" :
          "Beer"
  }