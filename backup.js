// Select the button
const button = document.getElementById('projects');

// Add a click event listener
button.addEventListener('click', function() {
    // Redirect to another page within the website
    window.location.href = 'project.html'; // Replace with the relative path to your page
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});