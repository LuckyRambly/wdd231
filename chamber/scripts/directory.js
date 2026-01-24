const url = "data/members.json";
const container = document.querySelector('#memberContainer');
const gridBtn = document.querySelector('#gridView');
const listBtn = document.querySelector('#listView');

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        } else {
            console.error("Error al obtener los datos del JSON");
        }
    } catch (error) {
        console.error("Error de conexión:", error);
    }
}

function displayMembers(members) {
    container.innerHTML = "";

    members.forEach((member) => {
        const card = document.createElement('section');
        
        const levels = { 1: "Miembro", 2: "Plata", 3: "Oro" };

        card.innerHTML = `
            <img src="images/${member.image}" alt="Logo de ${member.name}" loading="lazy" width="200" height="200">
            <h3>${member.name}</h3>
            <p class="tagline">${member.tagline}</p>
            <div class="info">
                <p><strong>Dirección:</strong> ${member.address}</p>
                <p><strong>Teléfono:</strong> ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visitar Sitio Web</a></p>
            </div>
            <p class="membership-level">Nivel: ${levels[member.membershipLevel]}</p>
        `;
        container.appendChild(card);
    });
}

gridBtn.addEventListener('click', () => {
    container.classList.add('member-display-grid');
    container.classList.remove('member-display-list');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
    container.classList.add('member-display-list');
    container.classList.remove('member-display-grid');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});

getMembers();