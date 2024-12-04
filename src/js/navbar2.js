const openModal = document.querySelector('#btnOpenModal');
const closeModal = document.querySelector('#btnCloseModal');
const modal = document.querySelector('#modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});
closeModal.addEventListener('click', () => {
    modal.close();
    openModal.checked = false;
});
