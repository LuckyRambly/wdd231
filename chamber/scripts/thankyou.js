document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const showInfo = document.querySelector('#results');

    function formatFriendlyDate(dateString) {
        if (!dateString || dateString === "null") return "Date not captured";
        
        const date = new Date(dateString);
        // format: Saturday, Feb 7, 2026, 1:30 PM
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    if (queryString) {
        showInfo.innerHTML = `
            <p><strong>First Name:</strong> ${urlParams.get("fname") || 'N/A'}</p>
            <p><strong>Last Name:</strong> ${urlParams.get("lname") || 'N/A'}</p>
            <p><strong>Email:</strong> ${urlParams.get("email") || 'N/A'}</p>
            <p><strong>Mobile:</strong> ${urlParams.get("phone") || 'N/A'}</p>
            <p><strong>Business:</strong> ${urlParams.get("organization") || 'N/A'}</p>
            <p><strong>Submitted on:</strong> ${formatFriendlyDate(urlParams.get("timestamp"))}</p>
        `;
    } else {
        showInfo.innerHTML = "<p>No data found. Complete the form in the Join page please.</p>";
    }
});