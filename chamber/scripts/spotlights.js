const membersURL = "data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const members = await response.json();
    displaySpotlights(members);
}

function displaySpotlights(members) {
    const container = document.querySelector('#spotlight-cards');
    const eligible = members.filter(m => m.membershipLevel === 2 || m.membershipLevel === 3);
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        const spotlight = document.createElement('div');
        spotlight.className = 'spotlight-card card';
        
        spotlight.innerHTML = `
            <h4>${member.name}</h4>
            <img src="images/${member.image}" alt="Logo ${member.name}">
            <p class="tagline">"${member.tagline}"</p>
            <hr>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website.replace('https://', '')}</a></p>
            <p class="level">Membership: ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
        `;
        container.appendChild(spotlight);
    });
}

getMembers();