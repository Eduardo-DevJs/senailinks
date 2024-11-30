const form = document.querySelector('#myForm');
const select = document.querySelector("#citySelect");

function changeFormAction(e) {
  e.preventDefault();  // Previne o envio imediato do formulário (usado para teste)

  // Altera o action baseado na escolha do usuário no select
  switch(select.value) {
    case 'vitoria':
      form.action = 'https://formsubmit.co/mdavel@findes.org.br'; // Exemplo 
      break;
      case 'vila_velha':
        form.action = 'https://formsubmit.co/lmariano@senai-es.org.br'; // Exemplo 
        break;
    case 'serra':
      form.action = 'https://formsubmit.co/mluchini@findes.org.br';
      break;
    default:
      form.action = 'https://formsubmit.co/mdavel@findes.org.br';
      break;
  }
}

select.addEventListener('change', changeFormAction);
window.addEventListener('load', changeFormAction);

const btnCancelar = document.getElementById("cancelar");
btnCancelar.addEventListener("click", () => {
  window.location.replace("../pages/unidadeVitoria.html")
});
