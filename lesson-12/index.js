const otherInfo = document.getElementsByClassName('other-info')[0];
const selectForOtherInfo = document.getElementsByClassName('select-for-other-info')[0];
const ageOfChild = document.getElementsByClassName('age-of-child')[0];

selectForOtherInfo.style.display = 'none';
ageOfChild.style.display = 'none';

otherInfo.onclick = function() {
  selectForOtherInfo.style.display = 'block';
}

const minuseInAdults = document.getElementsByClassName('minuse-in-adults')[0];
const minuseInChildren = document.getElementsByClassName('minuse-in-children')[0];
const minuseInRooms = document.getElementsByClassName('minuse-in-rooms')[0];
const pluseInAdults = document.getElementsByClassName('pluse-in-adults')[0];
const pluseInChildren = document.getElementsByClassName('pluse-in-children')[0];
const pluseInRooms = document.getElementsByClassName('pluse-in-rooms')[0];

const counterAdults = document.getElementsByClassName('counter-adults')[0];
const counterChildren = document.getElementsByClassName('counter-children')[0];
const counterRooms = document.getElementsByClassName('counter-rooms')[0];

const selectAgeChild = document.getElementsByClassName('select-age-child');

function decreaseAdults (event) {
  event.preventDefault();

  if (Number(counterAdults.innerHTML)) {
    counterAdults.innerHTML = Number(counterAdults.innerHTML) - 1;
  }
}

minuseInAdults.addEventListener('click', decreaseAdults);

function increaseAdults (event) {
  event.preventDefault();

  if (Number(counterAdults.innerHTML) <= 29) {
    counterAdults.innerHTML = Number(counterAdults.innerHTML) + 1;
  }
}

pluseInAdults.addEventListener('click', increaseAdults);

function increaseChildren (event) {
  event.preventDefault();

  const newSelect = document.createElement('select');
  newSelect.classList.add('new-select-js');

  ageOfChild.style.display = 'block';

  if (Number(counterChildren.innerHTML) <= 9) {
    counterChildren.innerHTML = Number(counterChildren.innerHTML) + 1;
    selectAgeChild.append;

    for(let i = 0; i <= 17; i++) {
      newSelect.options[newSelect.options.length]= new Option(`${i} years old`, `${i + 1}`);
    }

    ageOfChild.appendChild(newSelect);
  }
}

pluseInChildren.addEventListener('click', increaseChildren);

function decreaseChildren (event) {
  event.preventDefault();


  if (Number(counterChildren.innerHTML)) {
    counterChildren.innerHTML = Number(counterChildren.innerHTML) - 1;
    
    const newSelect = document.getElementsByClassName('new-select-js');
    ageOfChild.removeChild(newSelect);
  }
}

minuseInChildren.addEventListener('click', decreaseChildren);

function decreaseRooms (event) {
  event.preventDefault();

  if (Number(counterRooms.innerHTML)) {
    counterRooms.innerHTML = Number(counterRooms.innerHTML) - 1;
  }
}

minuseInRooms.addEventListener('click', decreaseRooms);

function increaseRooms (event) {
  event.preventDefault();

  if (Number(counterRooms.innerHTML) <= 29) {
    counterRooms.innerHTML = Number(counterRooms.innerHTML) + 1;
  }
}

pluseInRooms.addEventListener('click', increaseRooms);
