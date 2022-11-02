//Modal
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClose = document.querySelectorAll('[data-modal-closed]');

modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    modal.classList.remove('hidden');
  });
});

modalClose.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalCl = this.closest('[data-modal]');
    modalCl.classList.add('hidden');
    modalCl.classList.remove('modal-thank');
  });

});