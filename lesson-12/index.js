const otherInfo = document.getElementsByClassName('other-info');
const selectForOtherInfo = document.getElementsByClassName('select-for-other-info');

selectForOtherInfo[0].style.display = 'none';

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

function decreaseAdults () {
  let numberCounterAdults = Number(counterAdults[0].innerHTML);
  numberCounterAdults;
}

minuseInAdults[0].addEventListener('click', decreaseAdults);