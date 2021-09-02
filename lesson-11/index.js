const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const homesGuestsLoves = document.getElementsByClassName('homes-guests-loves');
const contain = document.getElementsByClassName('contain');
const containTitle = document.createElement('h2');
const hotels = document.getElementsByClassName('hotels');
let hotelsInform = document.createElement('div');

containTitle.textContent = 'Homes guests loves';

containTitle.classList.add('contain__title');
hotelsInform.classList.add('hotels__inform');

contain[0].prepend(containTitle);
hotels[0].appendChild(hotelsInform);

for (let elem of data) {
  let name = document.createElement('p');
  let city = document.createElement('p');
  let country = document.createElement('p');
  let imageHomeGuestLoves = document.createElement('img');
  let linkForImageHomeGuestLoves = document.createElement('a');

  name.classList.add('hotels__inform-name');
  city.classList.add('hotels__inform-city');
  country.classList.add('hotels__inform-city');
  imageHomeGuestLoves.classList.add('hotels__inform-img')

  imageHomeGuestLoves.setAttribute('src', elem.imageUrl);
  linkForImageHomeGuestLoves.setAttribute('href', '#');

  name.textContent = elem.name;
  city.textContent = elem.city;
  country.textContent = elem.country;

  linkForImageHomeGuestLoves.appendChild(imageHomeGuestLoves);

  hotelsInform.appendChild(linkForImageHomeGuestLoves);
  hotelsInform.appendChild(name);
  hotelsInform.appendChild(city);
  hotelsInform.appendChild(country);
}