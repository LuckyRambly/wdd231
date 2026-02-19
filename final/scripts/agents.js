
// DOM Manipulation
const gridContainer = document.querySelector('#agent-catalog-grid-container');
const modal = document.querySelector('#agent-catalog-modal');
const modalContent = document.querySelector('#agent-catalog-modal-content');
const closeModalBtn = document.querySelector('#agent-catalog-close-modal');
const visitDisplay = document.querySelector('#agent-catalog-visits');

// URL API
const POKE_API_BASE = 'https://pokeapi.co/api/v2/pokemon';

// random IDs (15 random between 1000 pokemons)
const getRandomAgentIds = (count, max) => {
    const ids = new Set();
    while (ids.size < count) {
        ids.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(ids);
};

// LOCAL STORAGE (Visit counter)
const handleVisitCounter = () => {
    let visits = Number(window.localStorage.getItem('nert-agent-visits')) || 0;
    visits++;
    window.localStorage.setItem('nert-agent-visits', visits);
    if (visitDisplay) {
        visitDisplay.textContent = `How many times you have been here: ${visits}`;
    }
};

// FETCH API , ASYNC/AWAIT and TRY/CATCH
const fetchAgents = async () => {
    try {
        // cleaning
        gridContainer.innerHTML = '';
        
        const randomIds = getRandomAgentIds(15, 1000);

        // Array Methods - forEach
        // Promise.all (quick boy)
        const promises = randomIds.map(id => fetch(`${POKE_API_BASE}/${id}`).then(res => res.json()));
        const agentsData = await Promise.all(promises);

        // drawing every agente
        agentsData.forEach(agent => renderAgentCard(agent));

    } catch (error) {
        console.error("Error on the API:", error);
        gridContainer.innerHTML = `<p class="error-msg">Comunication error: The connection could not be established.</p>`;
    }
};

// DYNAMIC CONTENT and TEMPLATE LITERALS
const renderAgentCard = (agent) => {
    const card = document.createElement('article');
    card.classList.add('agent-catalog__card');

    // NERT Specialities
    const specialties = {
        fire: "Fireeater",
        water: "Aqua Rescue",
        electric: "Dark Enviroments",
        grass: "Supervivence",
        poison: "Biohazard control",
        flying: "Risky altitudes",
        default: "Rookie"
    };

    const type = agent.types[0].type.name;
    const specialty = specialties[type] || specialties.default;

    // 4 properties (name, ID, type and the image)
    card.innerHTML = `
        <img class="agent-catalog__card-img" 
             src="${agent.sprites.other['official-artwork'].front_default}" 
             alt="Agente ${agent.name}" 
             loading="lazy">
        <span class="agent-catalog__card-badge">${specialty}</span>
        <h3 class="agent-catalog__card-name">${agent.name.toUpperCase()}</h3>
        <p class="agent-catalog__card-id">REG: #00${agent.id}</p>
        <button class="agent-catalog__card-button" data-id="${agent.id}">See file</button>
    `;

    // modal
    card.querySelector('.agent-catalog__card-button').addEventListener('click', () => {
        openAgentModal(agent);
    });

    gridContainer.appendChild(card);
};

// Modal dialog
const openAgentModal = (agent) => {
    // Template Literals
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>EXPEDIENTE: ${agent.name.toUpperCase()}</h2>
        </div>
        <div class="modal-body">
            <p><strong>Height:</strong> ${agent.height / 10} m</p>
            <p><strong>Weight:</strong> ${agent.weight / 10} kg</p>
            <p><strong>Ability:</strong> ${agent.abilities[0].ability.name}</p>
            <p><strong>XP:</strong> ${agent.base_experience} XP</p>
        </div>
    `;
    modal.showModal();
};

// close Modal
closeModalBtn.addEventListener('click', () => {
    modal.close();
});

document.addEventListener('DOMContentLoaded', () => {
    handleVisitCounter();
    fetchAgents();
});

// close modal at touch backdrop
modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
    );
    
    if (!isInDialog) {
        modal.close();
    }
});