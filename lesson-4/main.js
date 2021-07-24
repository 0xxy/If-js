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

function changeParagraphColor1(){
  for (let i = 0; i <= colors.length; i++) {
    text1.style.color = colors[i];
  }

  if(i == colors.length){
    i = 0;
  }
}

function changeParagraphColor2(){
  for (let i = 0; i <= colors.length; i++) {
    text2.style.color = colors[i];
  }

  if(i == colors.length){
    i = 0;
  }
}

function changeParagraphColor3(){
  for (let i = 0; i <= colors.length; i++) {
    text3.style.color = colors[i];
  }

  if(i == colors.length){
    i = 0;
  }
}

text1.addEventListener('click', changeParagraphColor1.bind(null, text1));
text2.addEventListener('click', changeParagraphColor2.bind(null, text2));
text3.addEventListener('click', changeParagraphColor3.bind(null, text3));