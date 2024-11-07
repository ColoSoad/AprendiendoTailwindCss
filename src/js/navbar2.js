const openModal = document.querySelector('#btnOpenModal');
const closeModal = document.querySelector('#btnCloseModal');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});
modal.addEventListener('click', () => {
    modal.close();
});
