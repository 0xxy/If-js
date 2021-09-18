const formEl = document.getElementById('form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(formEl);

  fetch('https://fe-student-api.herokuapp.com/api/file', {
  method: 'POST',
  body: formData,
  }).then(response => response.json())
  .then(formEl => console.log(formEl))
})