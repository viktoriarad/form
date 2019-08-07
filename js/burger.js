const burgerBtn = document.querySelector('.menu__burger-icon');
const burgerMenu = document.querySelector('.menu__list');
const closeBtn = document.querySelector('.menu__burger-icon--display-none');


burgerBtn.addEventListener('click', function () {
  burgerMenu.classList.add('menu__list-active');
  burgerBtn.classList.add('menu__burger-icon-active');
  closeBtn.classList.add('menu__burger-icon--display-none-active');
})


closeBtn.addEventListener('click', function () {
  burgerMenu.classList.remove('menu__list-active');
  closeBtn.classList.remove('menu__burger-icon--display-none-active');
  burgerBtn.classList.remove('menu__burger-icon-active');
})
