document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        card.classList.add('animate-slide-up');
    });

    const allModals = document.querySelectorAll('dialog');
    
    allModals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            const rect = modal.getBoundingClientRect();
            
            const isInDialog = (
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom
            );
            
            if (!isInDialog) {
                modal.close();
            }
        });
    });
});