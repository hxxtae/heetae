const header = document.querySelector('.header');
const menu = header.querySelector('.menu-list');

function onClickMenu(e) {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    const dataId = target.dataset;
    
    switch (dataId.id) {
      case 'about':
        const thisElement = document.querySelector('.main-show .about');
        thisElement.scrollIntoView({behavior: "smooth", block: "start"});
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

function menuClick() {
  menu.addEventListener('click', onClickMenu);
}

export default menuClick;
