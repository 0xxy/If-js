const otherInfo = document.getElementById('other-info');
const selectForOtherInfo = document.getElementById('select-for-other-info');
const ageOfChild = document.getElementById('age-of-child');

selectForOtherInfo.style.display = 'none';
ageOfChild.style.display = 'none';

otherInfo.onclick = function() {
  selectForOtherInfo.style.display = 'block';
}

const minuseInAdults = document.getElementById('minuse-in-adults');
const minuseInChildren = document.getElementById('minuse-in-children');
const minuseInRooms = document.getElementById('minuse-in-rooms');
const pluseInAdults = document.getElementById('pluse-in-adults');
const pluseInChildren = document.getElementById('pluse-in-children');
const pluseInRooms = document.getElementById('pluse-in-rooms');

const counterAdults = document.getElementById('counter-adults');
const counterChildren = document.getElementById('counter-children');
const counterRooms = document.getElementById('counter-rooms');

const selectAgeChild = document.getElementsByClassName('select-age-child');

function decreaseAdults (event) {
  event.preventDefault();
  
  const numbCounterAdults = +counterAdults.innerHTML;

  if (numbCounterAdults) {
    counterAdults.innerHTML = numbCounterAdults - 1;
  }
}

minuseInAdults.addEventListener('click', decreaseAdults);

function increaseAdults (event) {
  event.preventDefault();

  const numbCounterAdults = +counterAdults.innerHTML;

  if (numbCounterAdults <= 29) {
    counterAdults.innerHTML = numbCounterAdults + 1;
  }
}

pluseInAdults.addEventListener('click', increaseAdults);

function increaseChildren (event) {
  event.preventDefault();

  const newSelect = document.createElement('select');
  newSelect.classList.add('new-select-js');

  ageOfChild.style.display = 'block';

  const numbCounterChildren = +counterChildren.innerHTML;
  
  if (numbCounterChildren <= 9) {
    counterChildren.innerHTML = numbCounterChildren + 1;
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

  const numbCounterChildren = +counterChildren.innerHTML;

  if (numbCounterChildren) {
    counterChildren.innerHTML = numbCounterChildren - 1;
    
    const newSelect = document.getElementsByClassName('new-select-js');
    ageOfChild.removeChild(newSelect);
  }
}

minuseInChildren.addEventListener('click', decreaseChildren);

function decreaseRooms (event) {
  event.preventDefault();

  const numbCounterRooms = +counterRooms.innerHTML;
  
  if (numbCounterRooms) {
    counterRooms.innerHTML = numbCounterRooms - 1;
  }
}

minuseInRooms.addEventListener('click', decreaseRooms);

function increaseRooms (event) {
  event.preventDefault();

  const numbCounterRooms = +counterRooms.innerHTML;

  if (numbCounterRooms <= 29) {
    counterRooms.innerHTML = numbCounterRooms + 1;
  }
}

pluseInRooms.addEventListener('click', increaseRooms);
