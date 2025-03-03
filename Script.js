let index = 0;
const slides = document.querySelector('.slides');

function showSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % 4;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + 4) % 4;
    showSlide();
}

// Auto-slide every 5 seconds
setInterval(next
