let headerSearchInput = document.getElementById("headerSearchInput");
let mainContent = document.getElementById("main-content");
let mainBarco = document.getElementById("main-barco");
let btnClose = document.getElementById("btnClose");
let header = document.getElementById("header");

/*  */
let mainImgModal = document.getElementById("mainImgModal");

let mainImgModal1 = document.getElementById("mainImgModal1");
let mainImgModal2 = document.getElementById("mainImgModal2");
let mainImgModal3 = document.getElementById("mainImgModal3");
let mainImgModal4 = document.getElementById("mainImgModal4");
let mainImgModal5 = document.getElementById("mainImgModal5");

let boxMainImgModal1 = document.getElementById("boxMainImgModal1");
let boxMainImgModal2 = document.getElementById("boxMainImgModal2");
let boxMainImgModal3 = document.getElementById("boxMainImgModal3");
let boxMainImgModal4 = document.getElementById("boxMainImgModal4");
let boxMainImgModal5 = document.getElementById("boxMainImgModal5");



/* Para el color de la barra de busqueda */
headerSearchInput.addEventListener("click", function() {

    headerSearchInput.classList.add("header-search-input-focus");
    headerSearchInput.classList.remove("header-search-input-no-focus");
});
mainContent.addEventListener("click", () => {

    headerSearchInput.classList.add("header-search-input-no-focus");
    headerSearchInput.classList.remove("header-search-input-focus");
});

/* sirve para ocultar una etiqueta HTML utilizando su ID */
btnClose.addEventListener("click", function() {
    mainContent.style.display = "none";
});



/* Color menú Imagenes Video */
let optionVideos = document.getElementById("optionVideos");
let optionImagenes = document.getElementById("optionImagenes");

optionVideos.addEventListener("click", () => { 
  optionImagenes.classList.remove("option-selected");
  optionVideos.classList.add("option-selected");
});
optionImagenes.addEventListener("click", () => { 
  optionImagenes.classList.add("option-selected");
  optionVideos.classList.remove("option-selected");
});

/* Al darle click en videos desaparecera todo lo de imagenes y se diseversa */
let infoModal = document.getElementById("info-modal");
optionVideos.addEventListener("click", function() {
  mainImgModal.style.display = "none";
  infoModal.style.display = "none";
});
optionImagenes.addEventListener("click", function() {
  mainImgModal.style.display = "block";
  infoModal.style.display = "block";
});

/*  */
/*  */
/* Cuando haga click en el "" se ejucutara el siguiente funcion */

mainImgModal1.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_uno.jpg");

  boxMainImgModal1.classList.add("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.remove("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");

  mainImgModal1.classList.add("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.remove("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal2.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_dos.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.add("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.remove("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");

  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.add("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.remove("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal3.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_tres.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.add("box-img-barcos");
  boxMainImgModal4.classList.remove("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");

  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.add("img-barcos-opa");
  mainImgModal4.classList.remove("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal4.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_cuatro.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.add("box-img-barcos");
  boxMainImgModal5.classList.remove("box-img-barcos");
  
  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.add("img-barcos-opa");
  mainImgModal5.classList.remove("img-barcos-opa");
});
mainImgModal5.addEventListener("click", () => {
  mainImgModal.setAttribute("src", "img/barco_cinco.jpg");

  boxMainImgModal1.classList.remove("box-img-barcos");
  boxMainImgModal2.classList.remove("box-img-barcos");
  boxMainImgModal3.classList.remove("box-img-barcos");
  boxMainImgModal4.classList.remove("box-img-barcos");
  boxMainImgModal5.classList.add("box-img-barcos");

  mainImgModal1.classList.remove("img-barcos-opa");
  mainImgModal2.classList.remove("img-barcos-opa");
  mainImgModal3.classList.remove("img-barcos-opa");
  mainImgModal4.classList.remove("img-barcos-opa");
  mainImgModal5.classList.add("img-barcos-opa");
});



/* -------------------------------------------------------------- */
/* Alertas al darle click a unos botones */
let comprarAhora = document.getElementById("comprarAhora");
let agregarCarrito = document.getElementById("agregarCarrito");

comprarAhora.addEventListener("click", () => { 
alert("¡Gracias por su compra!");
});
agregarCarrito.addEventListener("click", () => { 
alert("¡Ha sido agregado con éxito!");
});


/* -------------------------------------------------------------- */
/* El cambio de la imagen al pasar el cursor por encima y que se mantenga la imagen */
let miniaturas = document.querySelectorAll('.img-mini');

miniaturas.forEach((miniatura) => {
    miniatura.addEventListener('click', () => {

    const imagenPrincipal = document.getElementById('mainImgModal');
    const src = miniatura.getAttribute('src');
    imagenPrincipal.setAttribute('src', src);
    imagenPrincipal.classList.add('enlarge');
    });
});
let containerImg = document.querySelector('.principal-container-img');
let imagenPrincipal = document.getElementById('mainImgModal111');


containerImg.addEventListener('mouseover', (event) => {
  if (event.target && event.target.classList.contains('principal-article')) {
    const src = event.target.querySelector('.img-mini-p').getAttribute('src');
    imagenPrincipal.setAttribute('src', src);

  }
});

/*  */
/*  */
window.onload = () => {
  let modalt = document.getElementById('modalt');
  let mainImgModal111 = document.getElementById('mainImgModal111');

  // Al cargar la página, quitamos ciertos estilos del contenedor 1
  modalt.classList.add('quitar-estilo');
  
  // Agregamos un evento de clic al contenedor 2
  mainImgModal111.addEventListener('click', () => {
      // Al hacer clic en el contenedor 2, volvemos a agregar los estilos al contenedor 1
      modalt.classList.remove('quitar-estilo');
  });
}
/*  */
/*  */
let start1 = document.getElementById("start1")
let start2 = document.getElementById("start2")
let start3 = document.getElementById("start3")
let start4 = document.getElementById("start4")
let start5 = document.getElementById("start5")
let puntuacion = document.getElementById("puntuacion").innerText = 4.1
    
    if(puntuacion >= 0 && puntuacion <= 0.2) {
        start1.setAttribute("class", "estrella fa-regular fa-star")
        start2.setAttribute("class", "estrella fa-regular fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 0.3 && puntuacion <= 0.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start2.setAttribute("class", "estrella fa-regular fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 0.8 && puntuacion <= 1.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-regular fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 1.3 && puntuacion <= 1.7){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 1.8 && puntuacion <= 2.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-regular fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 2.3 && puntuacion <= 2.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 2.8 && puntuacion <= 3.2){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-regular fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 3.3 && puntuacion <= 3.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 3.8 && puntuacion <= 4.2) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-regular fa-star")
    }
    else if(puntuacion >= 4.3 && puntuacion <= 4.7) {
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-solid fa-star-half-stroke")
    }
    else if(puntuacion >= 4.8 && puntuacion <= 5){
        start1.setAttribute("class", "estrella fa-solid fa-star")
        start2.setAttribute("class", "estrella fa-solid fa-star")
        start3.setAttribute("class", "estrella fa-solid fa-star")
        start4.setAttribute("class", "estrella fa-solid fa-star")
        start5.setAttribute("class", "estrella fa-solid fa-star")
    }


/*   <i class="fa-solid fa-star-half-alt">Media estrella</i>  */
/* <i class="fa-regular fa-star">Vacia estrella</i> */
/* <i class="fa-solid fa-star">Llena estrella</i> */

/*  */
/* zoom */




let puntuacion5 = document.getElementById("puntuacion5");
let puntuacion4 = document.getElementById("puntuacion4");
let puntuacion3 = document.getElementById("puntuacion3");
let puntuacion2 = document.getElementById("puntuacion2");
let puntuacion1 = document.getElementById("puntuacion1");

puntuacion5.innerHTML = "13";
puntuacion4.innerHTML = "33";
puntuacion3.innerHTML = "33";
puntuacion2.innerHTML = "33";
puntuacion1.innerHTML = "33";

let barra1Puntaje = document.getElementById("barra1Puntaje");
let barra2Puntaje = document.getElementById("barra2Puntaje");
let barra3Puntaje = document.getElementById("barra3Puntaje");
let barra4Puntaje = document.getElementById("barra4Puntaje");
let barra5Puntaje = document.getElementById("barra5Puntaje");

let buttonGraficar = document.getElementById("buttonGraficar");

buttonGraficar.addEventListener("click", function () {
  // Calcula el total de votantes
  let totalVotantes =
    parseInt(puntuacion5.innerHTML) +
    parseInt(puntuacion4.innerHTML) +
    parseInt(puntuacion3.innerHTML) +
    parseInt(puntuacion2.innerHTML) +
    parseInt(puntuacion1.innerHTML);

  // Calcula el porcentaje y actualiza la barra para cada puntuación
  barra1Puntaje.style.width = (parseInt(puntuacion5.innerHTML) * 2) + "px";
  barra2Puntaje.style.width = (parseInt(puntuacion4.innerHTML) * 2) + "px";
  barra3Puntaje.style.width = (parseInt(puntuacion3.innerHTML) * 2) + "px";
  barra4Puntaje.style.width = (parseInt(puntuacion2.innerHTML) * 2) + "px";
  barra5Puntaje.style.width = (parseInt(puntuacion1.innerHTML) * 2) + "px";
});



/* Al pasar por encima de las estrellas aparecera calificaciones de las estrellas */
function mostrarTabla() {
document.getElementById('tabla').style.display = 'block';
}
function ocultarTabla() {
document.getElementById('tabla').style.display = 'none';
}