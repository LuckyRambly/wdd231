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

    const openButtons = document.querySelectorAll('.info-btn');
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.showModal();
        });
    });

    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('dialog').close();
        });
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