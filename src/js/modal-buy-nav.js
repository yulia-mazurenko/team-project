(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-nav-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-nav-close]"),
    modal: document.querySelector("[data-modal-buy-nav]"),
    body: document.querySelector("[data-body-buy-nav]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();