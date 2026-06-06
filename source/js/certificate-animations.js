const tracked = document.querySelector('.certificate');

const certificateImg = document.querySelector('.certificate__card');
const certificateButton = document.querySelector('.certificate__button');
const certificateText = document.querySelector('.certificate__text');
const certificateTitle = document.querySelector('.certificate__title');
const certificateTitleAnim = document.querySelector('.certificate__title-animation');

function observeAnimatedElem() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        certificateImg.classList.add('animation');
        certificateButton.classList.add('animation');
        certificateText.classList.add('animation');
        certificateTitle.classList.add('animation');
        certificateTitleAnim.classList.add('animation');

      } else {
        certificateImg.classList.remove('animation');
        certificateButton.classList.remove('animation');
        certificateText.classList.remove('animation');
        certificateTitle.classList.remove('animation');
        certificateTitleAnim.classList.remove('animation');
      }
    });
  });

  observer.observe(tracked);
}

document.addEventListener('DOMContentLoaded', observeAnimatedElem);
