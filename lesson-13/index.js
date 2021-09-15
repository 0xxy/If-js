const urlHotelsContent = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

fetch(urlHotelsContent) 
  .then(response => response.json())
  .then(function(data) {

    const hotelsInform = document.getElementById('hotels-inform');

    data.forEach(function(elem) {
      const content = `
      <a href="#"><img class='hotels__inform-img' src="${elem.imageUrl}" alt="${elem.name}"></a>
      <p class='hotels__inform-name'>${elem.name}</p>
      <p class='hotels__inform-city'>${elem.city}</p>
      <p class='hotels__inform-city'>${elem.country}</p>
    `;

      hotelsInform.innerHTML += content;
    });
  })
  
  .catch(function(err) {
    alert('Fetch problem: ' + err.message);
  });