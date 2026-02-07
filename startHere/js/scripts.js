const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector("#results").innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get("last")} for ${myInfo.get("ordinance")} on ${myInfo.get("date")} at ${myInfo.get("location")}.</p>
<p>You will recieve a confirmation ticket in your email: ${myInfo.get("email")} and in your phone: ${myInfo.get("phone")}.</p>
`