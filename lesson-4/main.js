function sum(a){
  return function(b){
    return a+b;
  }
}

console.log(sum(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementsById('text1');
const text2 = document.getElementsById('text2');
const text3 = document.getElementsById('text3');

const changeColor = () =>
let count = 0;
return () => {
  this.style.color = colors[count];
  count++;
  
  if (count == colors.length){
    count = 0;
  }
}

text1.addEventListener('click', changeColor.bind(null, text1));
text2.addEventListener('click', changeColor.bind(null, text2));
text3.addEventListener('click', changeColor.bind(null, text3));