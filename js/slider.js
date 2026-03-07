const sliders = document.querySelectorAll(".slides");

sliders.forEach(slides => {

    const slide = slides.querySelectorAll(".slide");
    const total = slide.length;

    let index = 0;

    setInterval(() => {
        index++;

        if(index >= total){
            index = 0;
        }

        slides.style.transform = `translateX(-${index * 100}%)`;

    }, 4000);

});
