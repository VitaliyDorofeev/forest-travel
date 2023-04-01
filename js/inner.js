const navBtn = document.querySelector('.header-nav-button');
const headerInner = document.querySelector('.header-inner');
const headerTop = document.querySelector('.header-top');
const navList = document.querySelector('.header-nav-list');


navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    headerInner.classList.toggle('active');
    headerTop.classList.toggle('active');
    navList.classList.toggle('active');
});

