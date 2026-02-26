// function showAlt(x) {
//   document.getElementById("alttext").innerHTML=x.alt;
// }

// function hideAlt(x) {
//   document.getElementById("alttext").innerHTML="";
// }

const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

showSlide(index);

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3000);