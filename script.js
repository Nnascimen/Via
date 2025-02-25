let images = ['img/1.png', 'img/2.png', 'img/3.png'];
let index = 0;
let time = 3000;
function slideShow(){
    document.getElementById('image').src = images[index];
    index++;

    if(index == images.length){
        index = 0;
    }

    setTimeout('slideShow()', time);
}
slideShow();

// Obtém elementos
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.querySelector(".close");

// Quando o botão for clicado, exibe o modal
btn.onclick = function () {
    modal.style.display = "block";
};

// Quando clicar no "X", fecha o modal
span.onclick = function () {
    modal.style.display = "none";
};

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", function () {
  const btnTopo = document.getElementById("btnTopo");

  // Mostrar o botão quando o usuário rolar para baixo
  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          btnTopo.style.display = "block";
      } else {
          btnTopo.style.display = "none";
      }
  });

  // Adicionando evento de clique para voltar ao topo
  btnTopo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const modall = document.getElementById("myModall");
const btnn = document.getElementById("oi");
const spann = document.querySelector(".closee");

// Quando o botão for clicado, exibe o modal
btnn.onclick = function () {
    modall.style.display = "block";

};

// Quando clicar no "X", fecha o modal
spann.onclick = function () {
    modall.style.display = "none";
};

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function (event) {
    if (event.target === modall) {
        modall.style.display = "none";
    }
};

function toggleContent() {
    var content = document.getElementById("extraContent");
    var button = document.getElementById("toggleBtn");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Ver Menos";
    } else {
        content.style.display = "none";
        button.textContent = "Ver Mais";
    }
}