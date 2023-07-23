const inputNome = document.querySelector("#nome");
const inputSobrenome = document.querySelector("#sobrenome");
const submit = document.querySelector(".submit");

//quando eu clicar no meu botão
const clicaBotao = (evento) => {
    evento.preventDefault();
    const valorNome = inputNome.value;
    const valorSobrenome = inputSobrenome.value;
    return valorNome, valorSobrenome;
};

const salvaDados = () => {
    const salvo = localStorage.setItem("nome", clicaBotao);
    return salvo;
};

submit.addEventListener("click", clicaBotao);
