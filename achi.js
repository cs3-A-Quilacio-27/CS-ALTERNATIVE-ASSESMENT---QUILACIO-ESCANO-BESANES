let currentSlide = 0;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.querySelector('.carousel');
    if (n > slides.children.length - 1) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.children.length - 1;
    } else {
        currentSlide = n;
    }

    const translateValue = -currentSlide * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}
