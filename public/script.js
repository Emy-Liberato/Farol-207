const modalPersonagens = document.getElementById("modal");
const light = document.querySelector(".light");
const body = document.body;

// Modal personagens
function openModalPersonagem(nomeDoPersonagem) {
  const personagem = personagens.find((p) => p.nome === nomeDoPersonagem);

  modalPersonagens.style.display = "flex";
  body.style.overflow = "hidden";

  modalPersonagens.innerHTML = `
    <div class="modalContent">
      <span onclick="closeModalPersonagem()"><i class="uil uil-multiply"></i></span>
      <div class="ilustracaoNome">
        <h2>
          ${personagem.nome}
        </h2>
        <img src="${personagem.imagem}" alt="Ilustração ${personagem.nome}" />
      </div>
      <div class="infos">
        <div class="atributos">
          <p>Idade: ${personagem.idade}</p>
          <p>Altura: ${personagem.altura}</p>
          <p>Peso: ${personagem.peso}kg</p>
        </div>
        <div class="modalText">
          <p>
            ${personagem.historia}
          </p>
          <p>
            <strong>Curiosidade Marítima:</strong> ${personagem.curiosidade}
          </p>
          <p>
            <strong
              >“${personagem.frase}”</strong
            >
          </p>
        </div>
      </div>
    </div>
  `;
}

function closeModalPersonagem() {
  modalPersonagens.style.display = "none";
  body.style.overflow = "visible";
  modalPersonagens.innerHTML = "";
}

// modal increvase
window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const modalEmail = document.querySelector("#modalEmail"); 
  const body = document.body;

  if (urlParams.get("sucess") === "true") {
    modalEmail.style.display = "flex";
    body.style.overflow = "hidden";
    setTimeout(() => {
      modalEmail.style.display = "none";
      body.style.overflow = "visible";
    }, 2500);
  } else if (urlParams.get("sucess") === "false") {
    alert("Não foi possível enviar o e-mail. Tente novamente mais tarde.");
  }
});


// luz do farol
let estaAceso = false;

light.addEventListener("mouseenter", () => {
  if (!estaAceso) {
    light.style.opacity = 1;
  }
});

light.addEventListener("mouseleave", () => {
  if (!estaAceso) {
    light.style.opacity = 0;
  }
});

light.addEventListener("click", () => {
  estaAceso = !estaAceso;
  light.style.opacity = estaAceso ? 1 : 0;
});

const nav = document.querySelector("nav");
function openMenu() {
  nav.classList.toggle("active");
}
