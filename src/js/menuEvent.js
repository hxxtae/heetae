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

export function menuIconClick() {
  menuIcon.addEventListener('click', onClickMenuIcon);
}

export function overlayClick() {
  overlay.addEventListener('click', onClickOverlay);
}

export function menuClick() {
  menu.addEventListener('click', onClickMenu);
}
