function sum(a){
  return function(b){
    return a+b;
  }
}

console.log(sum(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text = document.getElementsByTagName('p');

let changeParagraphColor = function(){
  let i = 0;
  return function(){
    this.style.color = colors[i];
    i++;
    
    if (i == colors.length){
      i = 0;
    }
  }
}

for (let i = 0; i < text.length; i++){
  text[i].addEventListener('click', changeParagraphColor());
}
