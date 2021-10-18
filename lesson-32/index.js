const pluseInAdults = document.getElementById('pluse-in-adults');
const pluseInChildren = document.getElementById('pluse-in-children');
const pluseInRooms = document.getElementById('pluse-in-rooms');
const minuseInAdults = document.getElementById('minuse-in-adults');
const minuseInChildren = document.getElementById('minuse-in-children');
const minuseInRooms = document.getElementById('minuse-in-rooms');
const searchForm = document.getElementById('search-form-js');

import * as counters from './header.js';
import{fetchRequest, getDataDestination} from './homesGuestLover.js'

minuseInAdults.addEventListener('click', counters.decreaseAdults);
pluseInAdults.addEventListener('click', counters.increaseAdults);
pluseInChildren.addEventListener('click', counters.increaseChildren);
minuseInChildren.addEventListener('click', counters.decreaseChildren);
minuseInRooms.addEventListener('click', counters.decreaseRooms);
pluseInRooms.addEventListener('click', counters.increaseRooms);

searchForm.addEventListener('submit', getDataDestination);
fetchRequest();