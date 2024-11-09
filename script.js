const modalPersonagens = document.getElementById("modal");
const body = document.body;

function openModalPersonagem() {
  modalPersonagens.style.display = "flex";
  body.style.overflow = "hidden";
}

function closeModalPersonagem() {
  modalPersonagens.style.display = "none";
  body.style.overflow = "visible";
}
