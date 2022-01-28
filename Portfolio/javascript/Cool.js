// When the user clicks on div, open the popup
function popupCarousel() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

var m;

function openModal(n) {
    document.getElementById("myModal"+n).style.display = "block";
    m = n;
}

function closeModal(n) {
    document.getElementById("myModal"+n).style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex, m);
                            
function plusSlides(n, m) {
    showSlides(slideIndex += n, m);
}

function currentSlide(n, m) {
    showSlides(slideIndex = n, m);
}

function showSlides(n, m) {
    var i;
    var slides = document.getElementsByClassName("mySlides"+m);
    var dots = document.getElementsByClassName("demo"+m);
    var captionText = document.getElementById("caption"+m);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}