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
const pluseInAdults = document.getElementById('pluse-in-adults');
const pluseInChildren = document.getElementById('pluse-in-children');
const pluseInRooms = document.getElementById('pluse-in-rooms');

const counterAdults = document.getElementById('counter-adults');
const counterChildren = document.getElementById('counter-children');
const counterRooms = document.getElementById('counter-rooms');

const selectAgeChild = document.getElementsByClassName('select-age-child');
const searchForm = document.getElementById('search-form-js');
const containForAvaibleHotels = document.getElementById('contain-for-avaible-hotels');

containForAvaibleHotels.style.display = 'none';

function decreaseAdults (event) {
  event.preventDefault();
  
  const numbCounterAdults = +counterAdults.innerHTML;
  
  if (numbCounterAdults <= 1) {
    minuseInAdults.setAttribute('disabled', 'disabled');
    alert(`ATTENTION! Children can't travel without adults`)
  }
  if (numbCounterAdults) {
    counterAdults.innerHTML = numbCounterAdults - 1;
  }
}

minuseInAdults.addEventListener('click', decreaseAdults);

function increaseAdults (event) {
  event.preventDefault();

  const numbCounterAdults = +counterAdults.innerHTML;

  if (numbCounterAdults <= 29) {
    minuseInAdults.removeAttribute('disabled');
    counterAdults.innerHTML = numbCounterAdults + 1;
  }
}

pluseInAdults.addEventListener('click', increaseAdults);

function increaseChildren (event) {
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
}

pluseInChildren.addEventListener('click', increaseChildren);

function decreaseChildren (event) {
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
}

minuseInChildren.addEventListener('click', decreaseChildren);

function decreaseRooms (event) {
  event.preventDefault();

  const numbCounterRooms = +counterRooms.innerHTML;
  if (numbCounterRooms <= 1) {
    minuseInRooms.setAttribute('disabled', 'disabled');
  }
  if (numbCounterRooms) {
    counterRooms.innerHTML = numbCounterRooms - 1;
  }
}

minuseInRooms.addEventListener('click', decreaseRooms);

function increaseRooms (event) {
  event.preventDefault();

  const numbCounterRooms = +counterRooms.innerHTML;

  if (numbCounterRooms <= 29) {
    minuseInRooms.removeAttribute('disabled');
    counterRooms.innerHTML = numbCounterRooms + 1;
  }
}

pluseInRooms.addEventListener('click', increaseRooms);

const urlHotelContent = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
const hotelsInform = document.getElementById('hotels');

fetch(urlHotelContent) 
  .then(response => response.json())
  .then((data) => {
    const hotels = [ ...data ];
    const len = hotels.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (hotels[j].name > hotels[j+1].name) {
          const variable = hotels[j];
          hotels[j] = hotels[j+1];
          hotels[j+1] = variable;
        }
      }
    }

    hotels.forEach((elem) => {
      hotelsInform.innerHTML += `
        <div class='hotels__inform'>
          <a href="#"><img class='hotels__inform-img' src="${elem.imageUrl}" alt="${elem.name}"></a>
          <p class='hotels__inform-name'>${elem.name}</p>
          <p class='hotels__inform-city'>${elem.city}, ${elem.country}</p>
        </div>
      `;
    });
  })
  
  .catch(function(err) {
    alert('Fetch problem: ' + err.message);
  });

const urlHotelsContentFile = 'https://fe-student-api.herokuapp.com/api/hotels';

let getDataDestination = async (event) => {
  event.preventDefault();
  containForAvaibleHotels.style.display = 'block';
  
  const avaibleHotels = document.getElementById('avaible-hotels');
  const formData = new FormData(searchForm);
  let search = formData.get('destination');
  let adults = formData.get('adults');
  let children = formData.get('children');
  let rooms = formData.get('rooms');

  try {
    const fullUrl = urlHotelsContentFile + `?search=${search}&adults=${adults}&children=${children}&rooms=${rooms}`
    const response = await fetch(fullUrl);
    const hotels = await response.json();

    if (!hotels.length) {
      return alert('Check the entered data');
    }

    window.scrollTo({
      top: 900,
      behavior: 'smooth'
    });

    hotels.forEach((elem) => {
      avaibleHotels.innerHTML += `
      <div class='hotels__inform'>
        <a href="#"><img class='hotels__inform-img' src="${elem.imageUrl}" alt="${elem.name}"></a>
        <p class='hotels__inform-name'>${elem.name}</p>
        <p class='hotels__inform-city'>${elem.city}, ${elem.country}</p>
      </div>
      `;
    });
  }

  catch (err) {
    console.log('Fetch problem: ' + err.message);
  }

  // sessionStorage.setItem('newHotels', JSON.stringify(newHotels))
}

searchForm.addEventListener('submit', getDataDestination)  