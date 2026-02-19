
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup-nert__form');
    const nameInput = document.querySelector('#fname');
    
    if (!signupForm) return;

    // LOCAL STORAGE
    const savedName = localStorage.getItem('nert_draft_name');
    if (savedName && nameInput) {
        nameInput.value = savedName;
    }

    // Draft
    nameInput?.addEventListener('input', (e) => {
        localStorage.setItem('nert_draft_name', e.target.value);
    });

    // Send
    signupForm.addEventListener('submit', (event) => {
        // Validation
        const isInvalid = !validateForm();

        if (isInvalid) {
            event.preventDefault(); // stop if theres a nerror
            console.log("Failed validation.");
        } else {
            // If everything is fine, we send you to thankyou.html
            localStorage.removeItem('nert_draft_name');
            console.log("Perfect validation. Redirecting...");
        }
    });

    // Validation process (Within)
    function validateForm() {
        const phoneField = document.querySelector('#phone');
        const motivationField = document.querySelector('#motivation');

        // Validating the existence of this fields
        if (!phoneField || !motivationField) {
            console.error("We didnt find the fields.");
            return false;
        }

        const phone = phoneField.value.trim();
        const motivation = motivationField.value.trim();
        const phoneRegex = /^[0-9]{7,15}$/;

        // phone number
        if (!phoneRegex.test(phone)) {
            alert("ERROR: The phone number must contain only number, not special characters or letters (And 7 - 15).");
            return false;
        }

        // Textarea (10 letters minimu)
        if (motivation.length < 10) {
            alert("ERROR: Write at least 10 characters.");
            return false;
        }

        return true;
    }
});