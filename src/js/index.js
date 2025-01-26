const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const listaCartoes = document.querySelectorAll(".cartao");

cartaoAtual = 0;

btnAvancar.addEventListener("click", () => {
    if (cartaoAtual === listaCartoes.length - 1) return;

    esconderCartao(); 
    
    cartaoAtual++;
    mostrarCartao();
});

btnVoltar.addEventListener("click", () => {
    if (cartaoAtual === 0) return;

    esconderCartao(); 

    cartaoAtual--;    
    mostrarCartao();
});

function mostrarCartao() {
    listaCartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartao() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}