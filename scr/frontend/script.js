function esconderTudo(){

document.getElementById("login").classList.add("oculto");

document.getElementById("cadastro").classList.add("oculto");

document.getElementById("relatorio").classList.add("oculto");

document.getElementById("competencias").classList.add("oculto");

}

function abrirCadastro(){

esconderTudo();

document.getElementById("cadastro").classList.remove("oculto");

}

function abrirRelatorio(){

esconderTudo();

document.getElementById("relatorio").classList.remove("oculto");

}

function abrirCompetencias(){

esconderTudo();

document.getElementById("competencias").classList.remove("oculto");

}

function voltarCadastro(){

esconderTudo();

document.getElementById("cadastro").classList.remove("oculto");

}
