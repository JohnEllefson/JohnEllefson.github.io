// I had a hard time trying to display the date, but Daniel Schmitz in my learning group
// meeting shared the solution that he had found which helped me tremendously with this part

// Displays Date
let day = new Date().getDate();
const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("currentDate").innerHTML = dayOfWeek[new Date().getDay()] + ", " + (new Date().toLocaleString("en-GB",{month:'long', year:'numeric', day:'numeric'}))

// Makes the hamburger button responsive
const menubutton = document.querySelector('.response');
const nav = document.querySelector('.nav-bar')

menubutton.addEventListener('click', () => {nav.classList.toggle('responsive')}, false);

// Displays notification at the top of the page only on Fridays
if (new Date().getDay() != 5)
{
    document.getElementById("top-notification").style.display = 'none';
}