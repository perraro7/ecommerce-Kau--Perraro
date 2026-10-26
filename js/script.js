// ===== MENU QUE ABRE E FECHA =====
var botaoMenu = document.getElementById("btn-menu");
var menu = document.getElementById("menu");

botaoMenu.onclick = function () {
  if (menu.className == "menu") {
    menu.className = "menu aberto";   // abre
  } else {
    menu.className = "menu";          // fecha
  }
};


// ===== CALCULO DE FRETE =====
function calcularFrete() {
  var preco = Number(document.getElementById("produto").value);
  var cep = document.getElementById("cep").value;
  var resultado = document.getElementById("resultado-frete");
  var frete;
  var regiao;

  // o CEP precisa ter 8 numeros
  if (cep.length != 8 || isNaN(cep)) {
    resultado.innerHTML = "Digite um CEP valido com 8 numeros.";
    return;
  }

  // o primeiro numero do CEP mostra a regiao
  var primeiro = Number(cep[0]);

  if (primeiro <= 3) {
    frete = 29.90;
    regiao = "Sudeste";
  } else if (primeiro <= 5) {
    frete = 49.90;
    regiao = "Nordeste";
  } else if (primeiro <= 7) {
    frete = 59.90;
    regiao = "Norte e Centro-Oeste";
  } else {
    frete = 19.90;
    regiao = "Sul";
  }

  // frete gratis para produtos a partir de 7000
  if (preco >= 7000) {
    frete = 0;
  }

  if (frete == 0) {
    resultado.innerHTML = "Regiao " + regiao + ": frete gratis!";
  } else {
    resultado.innerHTML = "Regiao " + regiao + ": frete de R$ " + frete.toFixed(2);
  }
}

document.getElementById("btn-frete").onclick = calcularFrete;


// ===== VALIDACAO DO FORMULARIO =====
var formulario = document.getElementById("form-contato");

formulario.onsubmit = function (evento) {
  evento.preventDefault();   // nao deixa a pagina recarregar

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;
  var resultado = document.getElementById("resultado-form");

  if (nome.length < 3) {
    resultado.innerHTML = "O nome precisa ter pelo menos 3 letras.";
  } else if (email.indexOf("@") == -1) {
    resultado.innerHTML = "Digite um e-mail valido.";
  } else if (mensagem.length < 10) {
    resultado.innerHTML = "A mensagem precisa ter pelo menos 10 letras.";
  } else {
    resultado.innerHTML = "Obrigado, " + nome + "! Mensagem enviada.";
    formulario.reset();
  }
};
