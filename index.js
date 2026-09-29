// Login simples em JavaScript

const emailCorreto = "demo@exemplo.com";
const senhaCorreta = "senha123";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const senha = document.querySelector("#password");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailDigitado = email.value;
    const senhaDigitada = senha.value;

    if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {
        alert("Login realizado com sucesso! 🚀");

        console.log("Usuário entrou:", emailDigitado);

    } else {
        alert("E-mail ou senha incorretos ❌");

        console.log("Tentativa de login inválida");
    }
});