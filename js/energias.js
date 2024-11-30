const Listainstrutores = document.querySelectorAll(".instrutor");
const divInstrutor = document.querySelector("#instrutores");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modal-body");
const closeModalButton = document.querySelector(".close");

const instrutores = [
  {
    nome: "Matheus",
    areaTecnologica: "Energias Renováveis",
    formacao: "Técnico em Eletrotécnica, Engenheiro Eletricista e Mestre em Engenharia Elétrica Ufes - Processamento de Energia e Sistemas Elétricos de Potência.",
    bio: "Possui experiência com projeto, instalação e homologação de sistemas fotovoltaicos (microgeração distribuída) e com projetos de instalações elétricas em baixa tensão. Atua nos cursos de Técnico em Sistemas de Energia Renovável, Eletrotécnica, Eletroeletrônica e Eletromecânica, além dos cursos de qualificação em Instalador de Sistemas Fotovoltaicos.",
    img: "../image/instrutores/matheus.jpeg",
  },
  {
    nome: "Matheus",
    areaTecnologica: "Energias Renováveis",
    formacao: "Técnico em Eletrotécnica, Engenheiro Eletricista e Mestre em Engenharia Elétrica Ufes - Processamento de Energia e Sistemas Elétricos de Potência.",
    bio: "Possui experiência com projeto, instalação e homologação de sistemas fotovoltaicos (microgeração distribuída) e com projetos de instalações elétricas em baixa tensão. Atua nos cursos de Técnico em Sistemas de Energia Renovável, Eletrotécnica, Eletroeletrônica e Eletromecânica, além dos cursos de qualificação em Instalador de Sistemas Fotovoltaicos.",
    img: "../image/instrutores/mauricio.jpeg",
  },

];

function renderizarInstrutores(instrutores) {
  const instrutoresContainer = document.querySelector("#instrutores");

  instrutores.forEach((instrutor) => {
    // Criação dos elementos
    const divInstrutor = document.createElement("div");
    divInstrutor.classList.add("instrutor");

    const img = document.createElement("img");
    img.src = instrutor.img;
    img.alt = `Foto de ${instrutor.nome}`;

    const nome = document.createElement("h2");
    nome.textContent = instrutor.nome;

    // Evento de clique para abrir o modal
    divInstrutor.addEventListener("click", () => {
      modal.style.display = "flex"; // Exibe o modal
      // Preenche o conteúdo do modal com as informações do instrutor
      modalBody.innerHTML = `
        <h2>${instrutor.nome}</h2>
        <img src="${instrutor.img}" alt="${instrutor.nome}" />
        <p><strong>Área Tecnológica:</strong> ${instrutor.areaTecnologica}</p>
        <p><strong>Formação:</strong> ${instrutor.formacao}</p>
        <p><strong>Biografia:</strong> ${instrutor.bio}</p>
      `;
    });

    // Montagem da estrutura
    divInstrutor.appendChild(img);
    divInstrutor.appendChild(nome);

    instrutoresContainer.appendChild(divInstrutor);
  });
}

// Função para fechar o modal
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none"; // Fecha o modal
});

modal.addEventListener("click", (event) => {
  // Verifica se o clique foi feito fora do conteúdo do modal
  if (event.target === modal) {
    modal.style.display = "none"; // Fecha o modal
  }
});


renderizarInstrutores(instrutores);
