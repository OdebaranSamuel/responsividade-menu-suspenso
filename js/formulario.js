const inputNome = document.querySelector("#nome");
const inputSobrenome = document.querySelector("#sobrenome");
const submit = document.querySelector(".submit");

//quando eu clicar no meu botão vou pegar o nome e sobrenome e salvar no localstorage
const clicaBotao = (evento) => {
    evento.preventDefault();
    const valorNome = inputNome.value;
    const valorSobrenome = inputSobrenome.value;
    window.location = "avaliacao.html";
    localStorage.setItem("nome", valorNome);
    localStorage.setItem("sobrenome", valorSobrenome);
};

submit.addEventListener("click", clicaBotao);
