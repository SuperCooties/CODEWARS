function findNeedle(haystack) {
    // your code here
    let location = null;
    
    haystack.forEach((element, index) => {
      (element === 'needle') ? location = index : console.log(`index: ${index}, element: ${element}`)
    })
    
    return `found the needle at position ${location}`;
  }