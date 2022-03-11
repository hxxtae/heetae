let vh = window.innerHeight * 0.01;
document.querySelector('.main-img').style.setProperty('--vh', `${vh}px`);

// resize
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.querySelector('.main-img').style.setProperty('--vh', `${vh}px`);
});
