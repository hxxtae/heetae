const header = document.querySelector('.header');
const menuIcon = header.querySelector('.header-menu-button');
const menuNav = document.querySelector('.header-menu-section');
const menu = header.querySelector('.menu-list');

function onClickMenuIcon(e) {
  menuNav.classList.toggle('is-open');
}

function onClickMenu(e) {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    const dataId = target.dataset;
    
    switch (dataId.id) {
      case 'about':
        const thisElement = document.querySelector('.main-show .about-section');
        thisElement.scrollIntoView({ behavior: "smooth" });
        menuNav.classList.remove('is-open');
        break;
      case 'work':
        break;
      case 'project':
        break;
      case 'contact':
        break;
    }
  }
}

export function menuIconClick() {
  menuIcon.addEventListener('click', onClickMenuIcon);
}

export function menuClick() {
  menu.addEventListener('click', onClickMenu);
}
