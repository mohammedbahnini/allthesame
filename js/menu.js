const btnOpen = document.querySelector('.humberger-menu');
const btnClose = document.querySelector('.close-btn');
const menu = document.querySelector('nav');
const body = document.querySelector('body');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-list .nav-item a');



function openMenu() {
    menu.classList.add('visible');
    body.style.overflow = 'hidden';
    header.style.overflow = 'hidden';
}

function closeMenu() {
    menu.classList.remove('visible');
    body.style.overflow = 'auto';
    header.style.overflow = 'auto';
}

btnOpen.addEventListener('click', openMenu);

btnClose.addEventListener('click', closeMenu);

navLinks.forEach(item => item.addEventListener('click', closeMenu));