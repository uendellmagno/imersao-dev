// var listarFilmes = [
//   "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
//   "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
//   "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg",
//   "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
// ];

// for (var i = 0; i < listarFilmes.length; i++) {
//   document.write("<img src=" + listarFilmes[i] + " class='imgjs'>");
// }

// function tempo(request, response) {
//   const dynamicDate = new Date();

//   response.json({
//     date: dynamicDate.toGMTString(),
//   });
// }

// export default tempo;

// if (document.getElementById("filme").value.length == 0) {
//   console.error("No input! Operation Cancelled.");
// var picsExtensions =
//   ".jpg" ||
//   ".png" ||
//   ".webp" ||
//   ".jpeg" ||
//   ".tiff" ||
//   ".JPG" ||
//   ".PNG" ||
//   ".WEBP" ||
//   ".JPEG" ||
//   ".TIFF";

//Listar Filmes
function addFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (
    filmeFavorito.endsWith(
      ".jpg" ||
        ".png" ||
        ".webp" ||
        ".jpeg" ||
        ".tiff" ||
        ".JPG" ||
        ".PNG" ||
        ".WEBP" ||
        ".JPEG" ||
        ".TIFF"
    )
  ) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Oh, Oh!");
  }

  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementFavFilme = "<img src=" + filme + ">";
  var elementListarFilmes = document.getElementById("listaFilmes");
  elementListarFilmes.innerHTML =
    elementListarFilmes.innerHTML + elementFavFilme;
  //Console Output
  console.clear();
  console.warn("Botão pressionado:");
  console.info("Prosseguindo com a lógica...");
  console.log("Digitou: " + filme);
  console.log("Gerando: " + elementFavFilme);
  console.log("Pronto!");
}

// continuar aula em: https://youtu.be/ELPAQcu5TbY?t=1569
