// Burger menu

const navBtn = document.querySelector('.header-nav-button');
const navList = document.querySelector('.header-nav-list');
const header = document.querySelector('.header');
const headerTop = document.querySelector('.header-top');
const bodyLock = document.querySelector('.body-lock');

navBtn.addEventListener('click', () => {

    navBtn.classList.toggle('active');
    navList.classList.toggle('active');
    header.classList.toggle('active');
    headerTop.classList.toggle('active');
    bodyLock.classList.toggle('lock');

});