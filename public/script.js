const modalPersonagens = document.getElementById("modal");
const body = document.body;

function openModalPersonagem(nomeDoPersonagem) {
  const personagem = personagens.find((p) => p.nome === nomeDoPersonagem);

  modalPersonagens.style.display = "flex";
  body.style.overflow = "hidden";

  modalPersonagens.innerHTML = `
    <div class="modalContent">
      <span onclick="closeModalPersonagem()">x</span>
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

window.addEventListener("load",function(){
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get("sucess") === "true"){
    alert("deu certo!!!!")
  } else if (urlParams.get("sucess") === "false"){
    alert("Não deu certo :(")
  }
})
