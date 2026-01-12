
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();

if (yearSpan) {
    yearSpan.textContent = currentYear;
}

const LastModifiedDate = new Date(document.lastModified);
const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
const formattedDate = LastModifiedDate.toLocaleDateString('en-US', options);
const lastModifiedSpan = document.getElementById("lastModified");

if (lastModifiedSpan) {
    lastModifiedSpan.textContent = formattedDate;
}