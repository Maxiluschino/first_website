const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.list');

function toggleBurgerMenu() {
    burgerMenu.classList.toggle('list_opened');
    burgerButton.classList.toggle('burger-button_opened');
    loginButton.classList.toggle('about-button_visible');
}

burgerButton.addEventListener('click', toggleBurgerMenu);
