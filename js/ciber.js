const Listainstrutores = document.querySelectorAll(".instrutor");
const divInstrutor = document.querySelector("#instrutores");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modal-body");
const closeModalButton = document.querySelector(".close");

const instrutores = [
  {
    nome: "Mauricio",
    areaTecnologica: "Tecnologia da Informação (Cibersegurança, Redes e Desenvolvimento de Sistemas",
    formacao: "Especialista em Cibersegurança e Redes de Computadores",
    bio: "Mauricio Davel, 42 anos, formado em Gestão de Tecnologia da Informação, é especialista em Redes e Segurança Cibernética. Atua como gestor da Academia Cisco no Senai de Vitória/ES e instrutor de cursos técnicos voltados para o mercado de tecnologia. Com vasta experiência na área, dedica-se a preparar alunos para os desafios do mercado, utilizando metodologias práticas, gamificadas e tecnologias de ponta.",
    img: "../image/instrutores/mauricio.jpeg",
  },
  {
    nome: "Josanio",
    areaTecnologica: "Design de Interfaces",
    formacao: "Técnico em Redes de Computadores",
    bio: "Josanio, técnico em Redes de Computadores formado pelo Senai, é um profissional dedicado à área de redes de computadores. Iniciou sua carreira participando do programa trainee do Senai, onde se destacou e foi efetivado como instrutor de cursos técnicos. Atualmente, contribui para a formação de novos profissionais, compartilhando seu conhecimento e experiência prática em redes, sempre com foco no desenvolvimento de competências voltadas para o mercado de trabalho. Hoje cursa o primeiro período do curso superior em Análise e Desenvolvimento de Sistemas.",
    img: "../image/instrutores/josanio1.jpeg",
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
