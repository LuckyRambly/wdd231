const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let index = 0;

nextBtn.addEventListener('click', () => {
    index = (index + 1) % 3;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + 3) % 3;
    updateCarousel();
});

function updateCarousel() {
    // 33.33% to the left
    track.style.transform = `translateX(-${index * 33.333}%)`;
}