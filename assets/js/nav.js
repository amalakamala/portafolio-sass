function resizeHeaderOnScroll() {
  var distanciaY = window.pageYOffset || document.documentElement.scrollTop;

  /*
  window.pageYOffset:  devuelve los píxeles del documento actual.
  scrollTop : devuelve el número de píxeles contenido de un elemento se desplaza verticalmente.
  */

  var limite = 100;
  var elNav = document.getElementById('navegador'); 

  if (distanciaY > limite) {
    elNav.classList.add("el-menu");
    elNav.classList.remove("el-navegador");
  }else{
    elNav.classList.remove("el-menu");
    elNav.classList.add("el-navegador");    
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
