//https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
    if (name === '' || name === undefined) {
      return "Hello, World!";
    } else {
      let formattedName = name[0].toUpperCase() + name.substring(1).toLowerCase();
      return `Hello, ${formattedName}!`;
    }
  }