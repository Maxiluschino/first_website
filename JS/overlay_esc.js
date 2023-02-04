function closeModal (event) {
    event.preventDefault();
    modal.classList.remove('modal_active');
}



function handleClickByOverlay(event) {
    if (event.target === event.currentTarget) {
        closeModal(event);}
}

function handleEscapeDown(event) {
    if (event.key === 'Escape') {
        closeModal(event);}
}

document.addEventListener('keydown', handleEscapeDown);

modal.addEventListener('click', handleClickByOverlay);
loginButton.addEventListener('click', openModal);

modalCloseButton.addEventListener('click', closeModal);