// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o formulário
    const formulario = document.querySelector("form");

    // Verifica se o formulário existe
    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            // Impede o envio do formulário
            event.preventDefault();

            // Exibe uma mensagem
            alert("Cadastro realizado com sucesso!");

            // Limpa os campos do formulário
            formulario.reset();

        });

    }

});
