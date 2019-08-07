const firmBtn = document.querySelector('#userFirm');
const individualBtn = document.querySelector('#userIndividual');
const firmData = document.querySelector('.form__firm-data')

firmBtn.addEventListener('click', function () {
  firmData.classList.remove('form__firm-data--display-none');
})

individualBtn.addEventListener('click', function () {
  firmData.classList.add('form__firm-data--display-none');
})
