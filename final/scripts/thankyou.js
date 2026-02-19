
document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('summary-container');
    
    // Gettinf the info from the URL (?fname=...&email=...)
    const params = new URLSearchParams(window.location.search);

    // Verification
    if (params.has('fname')) {
        
        // Extracting data
        const nombre = params.get('fname').replace(/\+/g, ' ');
        const correo = params.get('email').replace('%40', '@');
        const ciudad = params.get('location') || 'No definida';
        const rango = params.get('rank') || 'Pendiente';

        // Adding the data
        container.innerHTML = `
            <ul style="list-style: none; padding: 0; text-align: left;">
                <li style="margin-bottom: 10px;"><strong>IDENTIFICATION:</strong> ${nombre.toUpperCase()}</li>
                <li style="margin-bottom: 10px;"><strong>E-MAIL:</strong> ${correo}</li>
                <li style="margin-bottom: 10px;"><strong>LOCATION:</strong> ${ciudad.toUpperCase()}</li>
                <li style="margin-bottom: 10px;"><strong>TOPIC:</strong> ${rango.toUpperCase()}</li>
            </ul>
            <p style="color: #dd0000; font-weight: bold; margin-top: 15px; border-top: 1px solid #ccc; pt: 10px;">
                CURRENT STATE: COMPLETE TRANSMISION
            </p>
        `;
    } else {
        // If there's error or someone get in with no data
        container.innerHTML = "<p>ERROR: There's no data here.</p>";
    }
});