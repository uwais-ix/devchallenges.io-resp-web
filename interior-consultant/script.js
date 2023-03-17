const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const title = document.querySelector('nav h1');
const nav = document.getElementById('nav');
const main = document.querySelector('main');

menu.addEventListener('click', (e) => {
  // change hamburger icon
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');

  // hide other elements
  main.classList.toggle('hidden');
  title.classList.toggle('hidden');

  // toggle nav menu
  nav.classList.toggle('active');
});
