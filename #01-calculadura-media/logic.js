var nome = "Uendell";
var nota1Bi = 9;
var nota2Bi = 7.57;
var nota3Bi = 6.17;
var nota4Bi = 8.53;

var notaFinal = (nota1Bi + nota2Bi + nota3Bi + nota4Bi) / 4;

if (notaFinal >= 10) {
  notaFinal = 10;
}

var notaFixa = notaFinal.toFixed(1);

console.log("Bem vindo " + nome);

if (notaFixa >= 7) {
  console.log("Parabéns! APROVADO.");
  console.log(
    "[Uhuu, você foi aprovado com uma média de '" +
      notaFixa +
      "' ! -- Boas Férias! --"
  );
  console.log("NOTA FINAL = " + notaFixa);
} else {
  console.log(
    "Ah, que pena! REPROVADO. [Sua nota (" +
      notaFixa +
      ") não é o suficiente para que seja aprovado.]"
  );
  console.log(
    "[Atente-se as datas das Provas de Recuperação disponíveis em nosso Website, boa sorte!]"
  );
  console.log("NOTA FINAL = " + notaFixa);
}

// ### Feito por Uendell ### //
/*
Variáveis, Strings, console.log, toFixed, operação matemática, concatenação.
*/
