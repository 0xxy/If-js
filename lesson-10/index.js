const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this; 
  } ,
  next() {
    if (this.current === undefined) {
      this.current = 0;
    }

    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++]
      };
    }
      
    if (this.data === this.data.length) {
      this.current = 0;
      this.next();
    }
  },
};

const changeStyle = ({...iterator}) => event => {
  event.target.style.color = iterator.next().value;
};

text1.addEventListener('click', changeStyle({ ...colors }));
text2.addEventListener('click', changeStyle({ ...colors }));
text3.addEventListener('click', changeStyle({ ...colors }));