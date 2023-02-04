const loginButton = document.querySelector('.about-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close-button');

function openModal () {
    modal.classList.add('modal_active');
}

function closeModal () {
    modal.classList.remove('modal_active');
}


loginButton.addEventListener('click', openModal);

modalCloseButton.addEventListener('click', closeModal);


console.log('.about-button')
