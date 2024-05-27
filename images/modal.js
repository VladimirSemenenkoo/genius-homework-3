const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const loggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', loggleModal)
modalBtnClose.addEventListener('click', loggleModal)