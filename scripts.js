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