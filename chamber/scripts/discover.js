import { locations } from '../data/locations.mjs';

document.addEventListener("DOMContentLoaded", () => {
    // -LocalStorage-
    const visitMessage = document.getElementById("message-text");
    const msInDay = 86400000;
    const lastVisit = localStorage.getItem("lastVisitDate");
    const currentVisit = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysPassed = Math.floor((currentVisit - lastVisit) / msInDay);

        if (daysPassed < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysPassed === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysPassed} ${dayText} ago.`;
        }
    }
    localStorage.setItem("lastVisitDate", currentVisit);

    // -cards-
    const gridContainer = document.getElementById("discover-grid");

    locations.forEach(loc => {
        const card = document.createElement("section");
        card.className = "card";
        card.style.gridArea = loc.id; // area ID

        card.innerHTML = `
            <h2>${loc.name}</h2>
            <figure>
                <img src="${loc.image}" alt="${loc.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${loc.address}</address>
            <p>${loc.description}</p>
            <button>Learn More</button>
        `;
        gridContainer.appendChild(card);
    });
});