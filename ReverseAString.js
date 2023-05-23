// Write a JavaScript program to rotate the string 'w3resource' in the right direction

const str = 'w3resource';

function reverseAString(str){
  let strReversed = "";

  for(let i = str.length-1; i >= 0; i--){
    strReversed += str[i];
  }

  return strReversed;

}

console.log(reverseAString(str));