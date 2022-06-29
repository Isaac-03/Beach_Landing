const menu = document.querySelector('#menu');

menu.addEventListener('click', menuClick);

function menuClick(e) {
  e.preventDefault(); 

  const menuList = document.getElementsById('menu-content');
  if (menuList.Id == 'menu-content') {
    menuList.id = 'menu-content-on';
  } else {
    menuList.id = 'menu-content';
  }
}



