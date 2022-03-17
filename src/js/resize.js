/**
 * -----------------------------------
 * 모바일 : 웹뷰로 접속 시 높이 사이즈 조절
 * -----------------------------------
 */

let vh = window.innerHeight * 0.01;
document.querySelector('.main-img').style.setProperty('--vh', `${vh}px`);

// resize
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.querySelector('.main-img').style.setProperty('--vh', `${vh}px`);
});
