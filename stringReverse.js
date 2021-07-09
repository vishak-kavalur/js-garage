//With helper variable
const reverseString = (str, length)  =>  {
    let result = ''
    for(let i=length-1; i>=0; i--) {
        result += str[i];
    }
    return result;
}

// In place with reverse()
const reverseStringInPlace = (str) => {
  return str.split('').reverse().join('');
};

// In place without reverse()
const reverseStringInPlaceCustom = (str, length) => {
  for(let i=0; i<length;i++){
    str.splice(i,0,str.pop());
  }
  return str.join('');
};

let str = "String Reverse!";

console.log(reverseString(str, str.length));
console.log(reverseStringInPlace(str));
console.log(reverseStringInPlaceCustom(str.split(''), str.length));