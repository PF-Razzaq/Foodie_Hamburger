const humburgerIcon = document.querySelector('.humburger-container');
const headerContent = document.querySelector('.header-container');
const closeIcon = document.querySelector('.close-icon');
const menus = document.querySelectorAll('nav>a');

humburgerIcon.addEventListener('click', () => {
    headerContent.classList.add('menu-open');
});

closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open');
});

menus.forEach(menu => {
    menu.addEventListener('click', () => {
        headerContent.classList.remove('menu-open');
    });
});