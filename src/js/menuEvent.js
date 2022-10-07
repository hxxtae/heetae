const header = document.querySelector('.header');
const menuIcon = header.querySelector('.header-menu-button');
const menuNav = document.querySelector('.header-menu-section');
const menu = header.querySelector('.menu-list');
const overlay = document.querySelector('.overlay');

function onClickMenuIcon(e) {
  menuNav.classList.toggle('is-open');
  overlay.classList.toggle('is-open');
}

function onClickOverlay() {
  menuNav.classList.remove('is-open');
  overlay.classList.remove('is-open');
}

function onClickMenu(e) {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    const dataId = target.dataset;
    
    switch (dataId.id) {
      case 'about':
        const thisElement1 = document.querySelector('.main-show .about-section');
        thisElement1.scrollIntoView({ behavior: "smooth" });
        menuNav.classList.remove('is-open');
        overlay.classList.remove('is-open');
        break;
      case 'work':
        const thisElement2 = document.querySelector('.main-show .work-section');
        thisElement2.scrollIntoView({ behavior: "smooth" });
        menuNav.classList.remove('is-open');
        overlay.classList.remove('is-open');
        break;
      case 'project':
        const thisElement3 = document.querySelector('.main-show .project-section');
        thisElement3.scrollIntoView({ behavior: "smooth" });
        menuNav.classList.remove('is-open');
        overlay.classList.remove('is-open');
        break;
      case 'contact':
        const thisElement4 = document.querySelector('.footer');
        thisElement4.scrollIntoView({ behavior: "smooth" });
        menuNav.classList.remove('is-open');
        overlay.classList.remove('is-open');
        break;
    }
  }
}

/**
 * -----------------------------------
 * 모바일 : 메뉴 아이콘 클릭 이벤트
 * -----------------------------------
 */
function menuIconClick() {
  menuIcon.addEventListener('click', onClickMenuIcon);
}

/**
 * -----------------------------------
 * 모바일 : overlay 화면 클릭 이벤트
 * -----------------------------------
 */
function overlayClick() {
  overlay.addEventListener('click', onClickOverlay);
}

/**
 * -----------------------------------
 * 전체 : 메뉴 클릭 이벤트
 * -----------------------------------
 */
function menuClick() {
  menu.addEventListener('click', onClickMenu);
}

menuClick();
menuIconClick();
overlayClick();
