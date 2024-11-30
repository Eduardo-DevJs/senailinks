let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".slider .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");

thumbnail.appendChild(thumbnailItems[0]);

// Define o intervalo do slider
let sliderInterval = setInterval(() => {
  moveSlider("next");
}, 8000);

// Reseta o intervalo
function resetSliderInterval() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    moveSlider("next");
  }, 8000);
}

// Função para botão "Próximo"
nextBtn.onclick = function () {
  moveSlider("next");
  resetSliderInterval(); // Reinicia o intervalo
};

// Função para botão "Anterior"
prevBtn.onclick = function () {
  moveSlider("prev");
  resetSliderInterval(); // Reinicia o intervalo
};

// Função para movimentar o slider
function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  // Remove a classe de animação após o término da animação
  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true } // Remove o event listener após ser chamado uma vez
  );
}

// Função para alternar o menu (se necessário)
function toggleMenu() {
  const menu = document.getElementById("lista-menu");
  const hamburger = document.getElementById("hamburger");
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}
