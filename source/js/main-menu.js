const body = document.body;
const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav__link');


const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';
const isTabKey = (evt) => evt.key === 'Tab';

const isFocus = (evt) => evt.contains(document.activeElement);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeMenu();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target === body) {
    closeMenu();
  }
};

// закрываю меню, если протабала его полностью.
const tabbingOutNav = (e) => {
  if (isTabKey(e) && !isFocus(nav)) {
    closeMenu();
  }
};

btnMenu.addEventListener('click', () => {
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onDocumentClick);

  btnMenu.classList.toggle('btn-menu--closer');
  body.classList.toggle('overlay');
  nav.classList.toggle('header__nav--open');


  navLinks.forEach((elem) => {
    elem.setAttribute('tabindex', '0');
  });

});

function closeMenu() {
  btnMenu.classList.remove('btn-menu--closer');
  body.classList.remove('overlay');
  nav.classList.remove('header__nav--open');

  navLinks.forEach((elem) => {
    elem.setAttribute('tabindex', '-1');
  });

  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onDocumentClick);
}

navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keyup', tabbingOutNav);
