const selectForOtherInfo = document.getElementById('select-for-other-info');
const ageOfChild = document.getElementById('age-of-child');
const containForAvaibleHotels = document.getElementById('contain-for-avaible-hotels');
containForAvaibleHotels.style.display = 'none';

const searchForm = document.getElementById('search-form-js');

const hotelsInform = document.getElementById('hotels');
const urlHotelContent = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

export const fetchRequest = () => 
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

export let getDataDestination = async (event) => {
  event.preventDefault();
  selectForOtherInfo.style.display = 'none';
  ageOfChild.style.display = 'none';
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

    avaibleHotels.innerHTML = '';

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

  document.getElementById('destination').value = '';
  document.getElementById('check-in').value = '';
  document.getElementById('check-out').value = '';
  document.getElementById('adults').value = '';
  document.getElementById('children').value = '';
  document.getElementById('rooms').value = ''; 
} 