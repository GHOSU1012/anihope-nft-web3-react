// ---------------------------------------- //
// ------------- Navbar Toggle ------------ //
// ---------------------------------------- //
const navbarToggle = () => {
    // Get burger, header, navbar list contain and the links
    let burger = document.querySelector('.burger-container');
    let header = document.querySelector('.header');
    let navbarList = document.querySelector('.nav-list-container');
    let navbarLinks = document.querySelectorAll('.navbar-link');

    // Burger onclick: active the elements
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        header.classList.toggle('active');
        navbarList.classList.toggle('active');
    });

    // Navbar links onclick: remove 'active' class
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.toggle('active');
            header.classList.toggle('active');
            navbarList.classList.toggle('active');
        });
    });
};

const runAll = () => {
    navbarToggle();
};

runAll();
