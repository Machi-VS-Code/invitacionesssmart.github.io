const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu-item');

menuButton.addEventListener('click', toggleMenu);
menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});

function toggleMenu() {
    menu.classList.toggle('open');
}

function closeMenu() {
    menu.classList.remove('open');
}