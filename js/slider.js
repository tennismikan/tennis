const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

let index = 0;

setInterval(() => {
    index++;

    if(index >= total){
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;

}, 4000);