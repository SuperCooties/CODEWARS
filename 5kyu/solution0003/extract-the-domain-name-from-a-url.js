//https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url){
    console.log(`Analyzing ${url}...`);
    
    //check for http://www.
    if (url.includes("http://www.")) {
      console.log(`${url} includes http://www.`);
      return fullTrim(url);
      
    //check for https://www. 
    } else if (url.includes("https://www.")) {
      console.log(`${url} includes https://www.`); 
      return httpswTrim(url);
      
    //check for http://  
    } else if (url.includes("http://")) {
      console.log(`${url} includes http://`); 
      return httpTrim(url);
      
    //check for https://  
    } else if (url.includes("https://")) {
      console.log(`${url} includes https://`); 
      return httpsTrim(url);
      
    //check for www.
    } else if (url.includes("www.")) {
      console.log(`${url} includes www.`); 
      return wwwTrim(url);
      
    //didn't catch
    } else {
      console.log(`${url} Didn't catch anything`);
      return url.split('.')[0];
    }  
  }
  
  function fullTrim(url) {
    const prefixLength = 'http://www.'.length
    
    url = url.replace('http://www.', '');
    
    return url.split('.')[0];
  }
  
  function httpswTrim(url) {
    const prefixLength = 'https://www.'.length
    
    url = url.replace('https://www.', '');
    
    return url.split('.')[0];  
  }
  
  function httpTrim(url) {
    const prefixLength = 'http://'.length
    
    url = url.replace('http://', '');
    
    return url.split('.')[0];  
  }
  
  function httpsTrim(url) {
    const prefixLength = 'https://'.length
    
    url = url.replace('https://', '');
    
    return url.split('.')[0];  
  }
  
  function wwwTrim(url) {
    const prefixLength = 'www.'.length
    
    url = url.replace('www.', '');
    
    return url.split('.')[0];  
  }