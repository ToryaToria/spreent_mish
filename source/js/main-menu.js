const body = document.body;
const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav');
const btnStart = document.querySelector('#js-button');

const navLinks = document.querySelectorAll('.nav__link');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeMenu();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target === nav) {
    closeMenu();
  }
};

btnMenu.addEventListener('click', () => {
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onDocumentClick);

  btnMenu.classList.toggle('btn-menu--closer');
  nav.classList.toggle('header__nav--open');

});

function closeMenu() {
  btnMenu.classList.remove('btn-menu--closer');
  nav.classList.add('header__nav--open');

  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onDocumentClick);
}

btnStart.addEventListener('click', () => {
  closeMenu();
});

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    closeMenu();
  });
});
