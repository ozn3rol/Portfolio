var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Masquez toutes les diapositives
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1; // Réinitialisez l'index à 1 lorsque toutes les diapositives ont été affichées
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block"; // Affichez la diapositive actuelle
  dots[slideIndex - 1].className += " active"; // Mettez en surbrillance l'indicateur de diapositive actuel
  
  setTimeout(showSlides, 5000); // Définissez un délai pour passer à la diapositive suivante
}
