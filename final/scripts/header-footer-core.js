document.addEventListener('DOMContentLoaded', () => {
    /* burger */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    if (menuToggle && navMenu && overlay) {
        // close / open burger
        function toggleMenu() {
            navMenu.classList.toggle('show');
            overlay.classList.toggle('show');
            body.classList.toggle('no-scroll');
            menuToggle.classList.toggle('active');
        }

        // open/close with buttom
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });

        // close at touch overlay
        overlay.addEventListener('click', toggleMenu);

        // close at touch a link
        const navLinks = document.querySelectorAll('.nav-item');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                overlay.classList.remove('show');
                body.classList.remove('no-scroll');
                menuToggle.classList.remove('active');
            });
        });
    }

    /* footer automatic date */
    const yearSpan = document.getElementById('current-year');
    const modifiedSpan = document.getElementById('last-modified');

    // updating year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // last modification date
    if (modifiedSpan) {
        const lastMod = new Date(document.lastModified);
        // Format: DD/MM/YYYY
        modifiedSpan.textContent = lastMod.toLocaleDateString();
    }
});