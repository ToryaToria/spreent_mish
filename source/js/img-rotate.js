const element = document.querySelector('.about__img--rotare');

let targetRotation = window.scrollY * 0.15;
let currentRotation = targetRotation;
const smoothness = 0.05; // Коэффициент плавности

const animate = () => {
  const diff = targetRotation - currentRotation;

  if (Math.abs(diff) > 0.01) {
    currentRotation += diff * smoothness;
    element.style.transform = `rotate(${currentRotation}deg)`;
  }

  requestAnimationFrame(animate);
};

animate();

window.addEventListener('scroll', () => {
  targetRotation = window.scrollY * 0.15;
});
