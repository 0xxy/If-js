const urlHotelsContent = 'https://fe-student-api.herokuapp.com/api';
const hotelsInform = document.getElementById('hotels-inform');

async function getHotels() {
  let hotels = JSON.parse(sessionStorage.getItem('hotels'));

  if(!hotels) {
    const response = await fetch(urlHotelsContent + '/hotels/popular');
    const data = await response.json();

    sessionStorage.setItem('hotels', JSON.stringify(data));
    hotels = data;
  }

  hotels.forEach((elem) => {
    const content = `
      <div>
        <a href="#"><img class='hotels__inform-img' src="${elem.imageUrl}" alt="${elem.name}"></a>
        <p class='hotels__inform-name'>${elem.name}</p>
        <p class='hotels__inform-city'>${elem.city}</p>
        <p class='hotels__inform-city'>${elem.country}</p>
      </div>
    `;

    hotelsInform.innerHTML += content;
  });
}

getHotels()