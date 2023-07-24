var listaEtrela = document.querySelectorAll(".estrela");
const botao = document.querySelector(".botao");
const nome = localStorage.getItem("nome");
const sobreNome = localStorage.getItem("sobrenome");
console.log(nome);
console.log(sobreNome);

document.addEventListener("click", function (evento) {
    var estrelaClasse = evento.target.classList;
    if (!estrelaClasse.contains("ativo")) {
        listaEtrela.forEach(function (elemento) {
            elemento.classList.remove("ativo");
        });
        estrelaClasse.add("ativo");
    }
});

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
    alert(
        `Obrigado por nos avaliar ${nome} ${sobreNome}, sua avalliação foi enviada com sucesso!`
    );
});
