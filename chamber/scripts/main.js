// --- MENÚ HAMBURGUESA ---
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



// --- FECHAS DEL FOOTER ---
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// --- MODO DÍA/NOCHE (Base) ---
const modeToggle = document.querySelector('#modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Cambiar el icono opcionalmente
    modeToggle.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
});