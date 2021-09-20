const formEl = document.getElementById('form');
const urlHotelsContentFile = 'https://fe-student-api.herokuapp.com/api/file';

formEl.addEventListener('submit', eventsWithData);

function eventsWithData(event) {
  event.preventDefault();

  const formData = new FormData(formEl);

  fetch(urlHotelsContentFile, {
    method: 'POST',
    body: formData,
  }).then(response => response.json())
    .then(data => console.log(data))
}