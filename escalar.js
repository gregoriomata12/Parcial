(function () {
   var ancho_diseño = 1707;
   var max_celular = 800;
   function ajustar() {
    var ancho = window.innerWidth;
    document.documentElement.style.zoom =
    ancho > max_celular ? (ancho / ancho_diseño) : 1;
   }
 ajustar();
 window.addEventListener("resize", ajustar)
})();