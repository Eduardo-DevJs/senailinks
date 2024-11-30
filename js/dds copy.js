const Listainstrutores = document.querySelectorAll(".instrutor");
const divInstrutor = document.querySelector("#instrutores");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modal-body");
const closeModalButton = document.querySelector(".close");

const instrutores = [
  {
    nome: "Maria",
    areaTecnologica: "Desenvolvimento de Sistemas",
    formacao: "Especialista em Engenharia de Software",
    bio: "Eduardo é especialista em Engenharia de Software com mais de 10 anos de experiência no desenvolvimento de sistemas corporativos. Apaixonado por programação, ele se destaca em criar soluções eficientes e escaláveis usando tecnologias modernas.",
    img: "https://img.freepik.com/fotos-gratis/femenino-morena-personas-mujer-parque_1301-1415.jpg?t=st=1732803972~exp=1732807572~hmac=a8c424c5bd6ffc591fb1caff3de823c6ac7ed3f852f046ac8505b541cceceaaf&w=360",
  },
  {
    nome: "Carla",
    areaTecnologica: "Design de Interfaces",
    formacao: "Mestre em Design de Experiência do Usuário",
    bio: "Mariana é mestre em Design de Experiência do Usuário e possui um olhar clínico para criar interfaces funcionais e esteticamente agradáveis. Ela tem trabalhado em projetos internacionais, sempre focando na melhoria da usabilidade e acessibilidade.",
    img: "https://img.freepik.com/fotos-gratis/a-mulher-feliz-na-parede-cinza_155003-10605.jpg?t=st=1732804084~exp=1732807684~hmac=99e2bd8007aba233f2352f1db5e25272bebfb03ab59c7fc792ea917e5ba31e5a&w=360",
  },
  {
    nome: "Jose",
    areaTecnologica: "Redes e Segurança",
    formacao: "Especialista em Segurança da Informação",
    bio: "Carlos é especialista em Segurança da Informação, com ampla experiência em proteção de dados e infraestrutura de redes. Ele tem ajudado empresas a se protegerem contra ameaças digitais, implementando sistemas robustos e treinando equipes em boas práticas de segurança.",
    img: "https://img.freepik.com/fotos-premium/retrato-de-jovem-empresario-iraniano-bonito-em-branco_251136-79633.jpg?w=360",
  },
  {
    nome: "Pedro",
    areaTecnologica: "Ciência de Dados",
    formacao: "Doutora em Inteligência Artificial e Análise de Dados",
    bio: "Ana Clara é doutora em Inteligência Artificial e Ciência de Dados, com uma sólida carreira acadêmica e profissional. Ela lidera projetos de análise preditiva e desenvolvimento de modelos de aprendizado de máquina, ajudando organizações a transformar dados em insights valiosos.",
    img: "https://img.freepik.com/fotos-gratis/feche-o-retrato-de-um-jovem-africano-com-restolho_171337-1296.jpg?t=st=1732804145~exp=1732807745~hmac=15fcc5be2b1f16a803c1ba8bfb7fae82061f7e3f294b1f34e6eb87c8df06f440&w=360",
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
