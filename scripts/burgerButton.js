
const navButton = document.querySelector('#nav-button');
const mainNav = document.querySelector('.main-nav'); 

if (navButton && mainNav) {
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('show');
        mainNav.classList.toggle('show');
    });
} else {
    console.error("Error: THIS BUTTON IS NOT WORKING AGAIN");
}