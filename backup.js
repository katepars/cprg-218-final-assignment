// Select the button
const button = document.getElementById('projects');

// Add a click event listener
button.addEventListener('click', function() {
    // Redirect to another page within the website
    window.location.href = 'project.html'; // Replace with the relative path to your page
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))