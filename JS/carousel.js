var slideIndex = 1;
MostraSlide(slideIndex);

/* Funçao que avança */
function avaSlide(n) {
  MostraSlide(slideIndex += n);
}

/* Slide atual */
function atualSlide(n) {
  MostraSlide(slideIndex = n);
}

/*Descobre aonde o carousel se encontra de momento, dependendo do input do utilizador avança ou
volta atrás um slide, atualiza tbm os pontos (debaixo da imagem) */
function MostraSlide(n) {
  var i;
  var slides = document.getElementsByClassName("meuSlide");
  var pontos = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < pontos.length; i++) {
      pontos[i].className = pontos[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  pontos[slideIndex-1].className += " active";
}
