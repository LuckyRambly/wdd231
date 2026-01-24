const menuBtn = document.querySelector('#menuButton');
const navElement = document.querySelector('#navigation');

menuBtn.addEventListener('click', () => {
    navElement.classList.toggle('open');
    menuBtn.classList.toggle('open');

    if (menuBtn.classList.contains('open')) {
        menuBtn.textContent = "X";
    } else {
        menuBtn.textContent = "☰";
    }
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const modeToggle = document.querySelector('#modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
});