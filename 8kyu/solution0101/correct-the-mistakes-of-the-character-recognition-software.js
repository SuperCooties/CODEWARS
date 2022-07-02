//https://www.codewars.com/kata/577bd026df78c19bca0002c0

function correct(string)
{
	//SHOULD BE ABLE TO USE THIS BUT replaceAll DOESN"T EXIST IN CODEWARS
  //return string.replaceAll('5','S').replaceAll('0','O').replaceAll('1','I');
  
  let char = string.split('');
  
  for (let i = 0; i < char.length; i++){
    switch (char[i]) {
        case '0': char[i] = 'O'; break;
        case '5': char[i] = 'S'; break;
        case '1': char[i] = 'I'; break;
        default: console.log(`Default case reached... char[i] = ${char[i]}`);
    }
  }
  
  return char.join('');
}