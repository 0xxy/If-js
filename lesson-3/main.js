function palindrome(str){
  return str === str.split('').reverse().join('');
}

res = palindrome('шалаш');
res2 = palindrome('шашлык');
res3 = palindrome('на доме чемодан');

console.log(res);
console.log(res2);
console.log(res3);

let min = (a,b) => a > b ? b : a;

console.log(min(3,7));

let max = (a,y) => a > y ? a : y;

console.log(max(9,24));

let array = [12, 20, 40, 33, 0, 6, 54, 39, 84, 60];
let changeZero = (array) => array.map((elem) => elem % 10 === 0 ? String(elem).replace(0, 'zero') : elem);

console.log(changeZero(array));