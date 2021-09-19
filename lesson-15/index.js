const formEl = document.getElementById('form');
const urlHotelsContent = 'https://fe-student-api.herokuapp.com/api';

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(formEl);

  fetch(urlHotelsContent + '/file', {
    method: 'POST',
    body: formData,
  }).then(response => response.json())
    .then(data => console.log(data))
})