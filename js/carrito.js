let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let subTotal = document.getElementById("subTotal");
let auxSubTotal = document.getElementById("auxSubTotal");
let numeroProductos = document.getElementById("numeroProductos");
let valorProducto = 500000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
document.getElementById("precioUnidad").innerHTML = auxValorProducto;
 
boxPlus.addEventListener("click", function(){
    let auxCant = boxCantidad.innerHTML;
if(auxCant < 10) {
      auxCant++;
      boxCantidad.innerHTML = auxCant;
      if(auxCant == 1) {
        numeroProductos.innerHTML = "(" + auxCant + " Producto)"
      }
      else if (auxCant == 0 || auxCant > 1){
        numeroProductos.innerHTML = "(" + auxCant + " Productos)"
      }
      
      let multi = valorProducto * auxCant

     /*  calcularSubtotal() */
      auxSubTotal = new Intl.NumberFormat("de-DE").format(multi);
      document.getElementById("subTotal").innerHTML = auxSubTotal;
}
});


boxMinus.addEventListener("click", function(){
    let auxCanti = boxCantidad.innerHTML;
if(auxCanti >= 1 && auxCanti <= 10) {
      auxCanti--;
      boxCantidad.innerHTML = auxCanti;


      if(auxCanti == 1) {
        numeroProductos.innerHTML = "(" + auxCanti + " Producto)"
      }
      else if (auxCanti == 0 || auxCanti > 1){
        numeroProductos.innerHTML = "(" + auxCanti + " Productos)"
      }

      let resta = valorProducto * auxCanti

      auxSubTotal = new Intl.NumberFormat("de-DE").format(resta);
      
      document.getElementById("subTotal").innerHTML = auxSubTotal;
      /* calcularSubtotal() */
      
}
});

/* function calcularSubtotal() {
    let auxCant = boxCantidad.innerHTML;
    document.getElementById("subTotal").innerHTML = valorProducto * Number(boxCantidad.innerHTML);

} */


/* function determinarSingularPlural (){
    if(auxCant < 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;
        if(auxCant == 1) {
          numeroProductos.innerHTML = "(" + auxCant + " Producto)"
        }
        else if (auxCant == 0 || auxCant > 1){
          numeroProductos.innerHTML = "(" + auxCant + " Productos)"
        }
}
} */