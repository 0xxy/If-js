const otherInfo = document.getElementsByClassName('other-info');
const selectForOtherInfo = document.getElementsByClassName('select-for-other-info');
const ageOfChild = document.getElementsByClassName('age-of-child');

selectForOtherInfo[0].style.display = 'none';
ageOfChild[0].style.display = 'none';

otherInfo[0].onclick = function() {
  selectForOtherInfo[0].style.display = 'block';
}

const minuseInAdults = document.getElementsByClassName('minuse-in-adults');
const minuseInChildren = document.getElementsByClassName('minuse-in-children');
const minuseInRooms = document.getElementsByClassName('minuse-in-rooms');
const pluseInAdults = document.getElementsByClassName('pluse-in-adults');
const pluseInChildren = document.getElementsByClassName('pluse-in-children');
const pluseInRooms = document.getElementsByClassName('pluse-in-rooms');

const counterAdults = document.getElementsByClassName('counter-adults');
const counterChildren = document.getElementsByClassName('counter-children');
const counterRooms = document.getElementsByClassName('counter-rooms');

const selectAgeChild = document.getElementsByClassName('select-age-child');

function decreaseAdults (event) {
  event.preventDefault();

  if (Number(counterAdults[0].innerHTML)) {
    counterAdults[0].innerHTML = Number(counterAdults[0].innerHTML) - 1;
  }
}

minuseInAdults[0].addEventListener('click', decreaseAdults);

function increaseAdults (event) {
  event.preventDefault();

  if (Number(counterAdults[0].innerHTML) <= 29) {
    counterAdults[0].innerHTML = Number(counterAdults[0].innerHTML) + 1;
  }
}

pluseInAdults[0].addEventListener('click', increaseAdults);

function increaseChildren (event) {
  event.preventDefault();

  ageOfChild[0].style.display = 'block';

  if (Number(counterChildren[0].innerHTML) <= 9) {
    counterChildren[0].innerHTML = Number(counterChildren[0].innerHTML) + 1;
    selectAgeChild.append;
    const newSelect = document.createElement('select');

    for(let i = 0; i <= 17; i++) {
      newSelect.options[newSelect.options.length]= new Option(`${i} years old`, `${i + 1}`);
    }

    ageOfChild[0].appendChild(newSelect);
  }
}

pluseInChildren[0].addEventListener('click', increaseChildren);

function decreaseChildren (event) {
  event.preventDefault();

  if (Number(counterChildren[0].innerHTML)) {
    counterChildren[0].innerHTML = Number(counterChildren[0].innerHTML) - 1;
    
    ageOfChild[0].removeChild();
  }
}

minuseInChildren[0].addEventListener('click', decreaseChildren);

function decreaseRooms (event) {
  event.preventDefault();

  if (Number(counterRooms[0].innerHTML)) {
    counterRooms[0].innerHTML = Number(counterRooms[0].innerHTML) - 1;
  }
}

minuseInRooms[0].addEventListener('click', decreaseRooms);

function increaseRooms (event) {
  event.preventDefault();

  if (Number(counterRooms[0].innerHTML) <= 29) {
    counterRooms[0].innerHTML = Number(counterRooms[0].innerHTML) + 1;
  }
}

pluseInRooms[0].addEventListener('click', increaseRooms);
