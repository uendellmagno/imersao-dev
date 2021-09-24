// El Gerador de números :)
var numeroSecreto = parseInt(Math.random() * 11);

var idTrials = document.getElementById("trials");
var actualTrial = 1;
var maxTrials = 3;

function Chutar() {
  // Variáveis
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var acertou =
    "Parabéns, de fato você é... maluco? (Eu pensei em " + numeroSecreto + ")";
  var tryAgain = "Irmão, é de 0 a 10!";
  var plsNumber = "QUERO NÚMEROS, AAAAAAAAAA :(";
  var errou = "Errou! Tente novamente. ";
  var maisAlto = "Dica: Chute mais alto ;)";
  var maisBaixo = "Dica: Chute mais baixo ;)";

  // Log no Console
  console.log(chute);
  console.log(numeroSecreto + " Ops, acho que o esqueci aqui ;)");

  // Lógica de Acerto
  if (chute == numeroSecreto) {
    resultado.innerHTML = acertou;
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = tryAgain;
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = errou + maisAlto;
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = errou + maisBaixo;
  } else if (chute != Number) {
    resultado.innerHTML = plsNumber;
  }
}
