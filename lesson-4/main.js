function sum(a){
  return function(b){
    return a+b;
  }
}

console.log(sum(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const changeColor = (textElem) => {
  let count = 0;
  return () => {
    textElem.style.color = colors[count];
    count++;
    
    if (count === colors.length){
      count = 0;
    }
  }
}

text1.addEventListener('click', changeColor(text1));
text2.addEventListener('click', changeColor(text2));
text3.addEventListener('click', changeColor(text3));