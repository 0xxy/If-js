const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return {
      current: 0,
      data: this.data,
      next() {
        this.current++;
        return{
          done: this.current == this.data.length,
          value: { color: this.data[this.current], index: this.current }
        };
      } 
    };
  }
};

for (let color of colors) {
  text1.style.color = color.color;
  text2.style.color = color.color;
  text3.style.color = color.color;
}

const changeStyle = id => event => {
  event.target.style.color = colors.next(id).value;
};


text1.addEventListener('click', changeStyle(text1));
text2.addEventListener('click', changeStyle(text2));
text3.addEventListener('click', changeStyle(text3));