// NAVBAR
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => 
    navbar.classList.toggle("sticky", window.scrollY > 0)
);
const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
.querySelectorAll(".menu a")
.forEach((link) => link.addEventListener("click", toggleMenu))


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('adoptionForm');
    const messageContainer = document.getElementById('submissionMessage');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Stopping the browser from trying to submit data to a server
            form.style.display = 'none';
            messageContainer.style.display = 'block';
            messageContainer.style
            const formHeading = form.closest('#formpg').querySelector('h1');
            if (formHeading) {
                formHeading.textContent = 'Thank You!';
            }
        });
    }
});
