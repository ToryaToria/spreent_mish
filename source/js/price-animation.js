const tracked = document.querySelector('.price__animation');
const elementsAnimation = document.querySelectorAll('.price__title');

function observeAnimatedText() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        elementsAnimation.forEach((elem) => elem.classList.add('animation'));
      } else {
        elementsAnimation.forEach((elem) => elem.classList.remove('animation'));
      }
    });
  });

  observer.observe(tracked);
}

document.addEventListener('DOMContentLoaded', observeAnimatedText);
