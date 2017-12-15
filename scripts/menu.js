// Globals
var _drawerOpen = false;

var _drawerElem = document.getElementById('menu-drawer');
var _containerElem = document.getElementById('container');
var _menuIconElem = document.getElementById('menu-icon');

function addClass(elem, className) {
  if (!elem.classList.contains(className)) {
    elem.classList.add(className);
  }
}

function openDrawer() {
  addClass(_containerElem, 'menu-open');
  addClass(_drawerElem, 'menu-open');
  _menuIconElem.src = 'img/x.png';
  _drawerOpen = true;
}

function closeDrawer() {
  _containerElem.classList.remove('menu-open');
  _drawerElem.classList.remove('menu-open');
  _menuIconElem.src = 'img/hamburger.png';
  _drawerOpen = false;
}

function toggleDrawer() {
  if (_drawerOpen) {
    closeDrawer();
  } else {
    openDrawer();
  }
}
