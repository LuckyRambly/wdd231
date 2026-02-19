
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
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // asynchonous

        // Validation
        if (!validateForm()) {
            console.log("Failed validation.");
            return;
        }

        // Asynchronous process with try/catch block
        try {
            console.log("Processing form data...");
            
            // Prepare data for redirection
            const formData = new FormData(signupForm);
            const queryParams = new URLSearchParams(formData).toString();

            // 1.5s delay
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Clean up and redirect
            localStorage.removeItem('nert_draft_name');
            console.log("Perfect validation. Redirecting...");
            window.location.href = `thankyou.html?${queryParams}`;

        } catch (error) {
            // Error handling for the asynchronous operation
            console.error("Submission error:", error);
            alert("An error occurred while processing your request. Please try again.");
        }
    });

    // Validation process
    function validateForm() {
        const phoneField = document.querySelector('#phone');
        const motivationField = document.querySelector('#motivation');

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

        // Textarea (10 letters minimum)
        if (motivation.length < 10) {
            alert("ERROR: Write at least 10 characters.");
            return false;
        }

        return true;
    }
});