// Scripts Index

function validaNome() {
  nome = document.getElementById("txtNome").value;
  vet = nome.split(" ")
  if (nome == "") {
    document.getElementById("erroSpan").innerHTML = "Erro! Digite seu nome completo";
  } else if (vet.length < 2) {
    document.getElementById("erroSpan").innerHTML = "Digite seu nome completo!";
  } else {
    localStorage.setItem("txtNome", nome);
    alert("Validação feita com sucesso!");
    window.open('menu.html', '_self');
  }
}


function limpaErro() {
  document.getElementById("erroSpan").innerHTML = "";
}

// Scripts Menu
function pegarTextoNome() {
  document.getElementById("insercaoNome").innerHTML = localStorage.getItem("txtNome");
}

// Scripts Felino
qtdCarinho = 0;
function mensagemUsuario() {
  nome = localStorage.getItem("txtNome");
  alert(`Oi ${nome}, tudo bem com você?`)
}
function contaCarinho() {
  document.getElementById(`qtdCarinho`).innerHTML = `${++qtdCarinho}`
}
function alteraImagem() {
  document.getElementById("gatinho3").src = "img/gato06.gif";
}
function restauraImagem() {
  document.getElementById("gatinho3").src = "img/gato03.gif";
}
function alteraTexto() {
  document.getElementById("txtGatinho4").innerHTML = "Ai, pare de fazer cócegas!";
}
function restauraTexto() {
  document.getElementById("txtGatinho4").innerHTML = "lá lá lá lá lá";
}
function gerarNumeroAleatorio() {
  num = parseInt(Math.random() * 100);
  document.getElementById("numeroAleatorio").value = num;
}
