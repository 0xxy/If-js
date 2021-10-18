const otherInfo = document.getElementById('other-info');
const selectForOtherInfo = document.getElementById('select-for-other-info');
const ageOfChild = document.getElementById('age-of-child');

selectForOtherInfo.style.display = 'none';
ageOfChild.style.display = 'none';

// otherInfo.addEventListener('click', function(e) {
//   [selectForOtherInfo.style.display, e.target.textContent] = (selectForOtherInfo.style.display === 'none') ? ['block'] : ['none'];
//   [ageOfChild.style.display, e.target.textContent] = (ageOfChild.style.display === 'none') ? ['block'] : ['none'];
// })

otherInfo.onclick = function() {
  selectForOtherInfo.style.display = 'block';
}

const minuseInAdults = document.getElementById('minuse-in-adults');
const minuseInChildren = document.getElementById('minuse-in-children');
const minuseInRooms = document.getElementById('minuse-in-rooms');

const counterAdults = document.getElementById('counter-adults');
const counterChildren = document.getElementById('counter-children');
const counterRooms = document.getElementById('counter-rooms');

const selectAgeChild = document.getElementsByClassName('select-age-child');
const labelForDesktop = document.getElementById('other-info__label--desktop');

let dataForLabel = [
  {
    nInAdults: 2,
  },
  {
    nInChildren: 0,
  },
  {
   nInRooms: 1,
  }
]

labelForDesktop.innerHTML =
  `${dataForLabel[0].nInAdults} Adults - ${dataForLabel[1].nInChildren} Children - ${dataForLabel[2].nInRooms} Rooms`

export function decreaseAdults (event) {
  event.preventDefault();
  
  const numbCounterAdults = +counterAdults.innerHTML;
  
  if (numbCounterAdults <= 1) {
    minuseInAdults.setAttribute('disabled', 'disabled');
    alert(`ATTENTION! Children can't travel without adults`)
  }
  if (numbCounterAdults) {
    counterAdults.innerHTML = numbCounterAdults - 1;
  }
  labelForDesktop.innerHTML =
  `${--dataForLabel[0].nInAdults} Adults - ${dataForLabel[1].nInChildren} Children - ${dataForLabel[2].nInRooms} Rooms`
}

export function increaseAdults (event) {
  event.preventDefault();

  const numbCounterAdults = +counterAdults.innerHTML;

  if (numbCounterAdults <= 29) {
    minuseInAdults.removeAttribute('disabled');
    counterAdults.innerHTML = numbCounterAdults + 1;
  }
  labelForDesktop.innerHTML =
  `${++dataForLabel[0].nInAdults} Adults - ${dataForLabel[1].nInChildren} Children - ${dataForLabel[2].nInRooms} Rooms`
}

export function increaseChildren (event) {
  event.preventDefault();  

  const newSelect = document.createElement('select');
  newSelect.classList.add('new-select-js');
  newSelect.setAttribute('id', 'new-select-js')

  ageOfChild.style.display = 'block';

  const numbCounterChildren = +counterChildren.innerHTML;
  
  if (numbCounterChildren <= 9) {
    minuseInChildren.removeAttribute('disabled');
    counterChildren.innerHTML = numbCounterChildren + 1;
    selectAgeChild.append;

    for(let i = 1; i <= 17; i++) {
      newSelect.options[newSelect.options.length]= new Option(`${i} years old`, `${i + 1}`);
    }

    ageOfChild.appendChild(newSelect);
  }
  labelForDesktop.innerHTML =
  `${dataForLabel[0].nInAdults} Adults - ${++dataForLabel[1].nInChildren} Children - ${dataForLabel[2].nInRooms} Rooms`
}

export function decreaseChildren (event) {
  event.preventDefault();

  const numbCounterChildren = +counterChildren.innerHTML;

  if (numbCounterChildren <= 1) {
    minuseInChildren.setAttribute('disabled', 'disabled');
    ageOfChild.style.display = 'none';
  }
  if (numbCounterChildren) {
    counterChildren.innerHTML = numbCounterChildren - 1;
    
    const newSelect = document.getElementById('new-select-js');
    ageOfChild.removeChild(newSelect);
  }
  labelForDesktop.innerHTML =
  `${dataForLabel[0].nInAdults} Adults - ${--dataForLabel[1].nInChildren} Children - ${dataForLabel[2].nInRooms} Rooms`
}

export function decreaseRooms (event) {
  event.preventDefault();

  const numbCounterRooms = +counterRooms.innerHTML;
  if (numbCounterRooms <= 1) {
    minuseInRooms.setAttribute('disabled', 'disabled');
  }
  if (numbCounterRooms) {
    counterRooms.innerHTML = numbCounterRooms - 1;
  }
  labelForDesktop.innerHTML =
  `${dataForLabel[0].nInAdults} Adults - ${dataForLabel[1].nInChildren} Children - ${--dataForLabel[2].nInRooms} Rooms`
}

export function increaseRooms (event) {
  event.preventDefault();

  const numbCounterRooms = +counterRooms.innerHTML;

  if (numbCounterRooms <= 29) {
    minuseInRooms.removeAttribute('disabled');
    counterRooms.innerHTML = numbCounterRooms + 1;
  }
  labelForDesktop.innerHTML =
  `${dataForLabel[0].nInAdults} Adults - ${dataForLabel[1].nInChildren} Children - ${++dataForLabel[2].nInRooms} Rooms`
}