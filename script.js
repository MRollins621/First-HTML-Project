/* -------------------------------
PROJECT FILTERING
-------------------------------- */
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');


if (filterButtons) {
filterButtons.forEach(btn => {
btn.addEventListener('click', () => {
const filter = btn.getAttribute('data-filter');


projects.forEach(project => {
const category = project.getAttribute('data-category');


if (filter === 'all' || category.includes(filter)) {
project.style.display = 'block';
} else {
project.style.display = 'none';
}
});
});
});
}


/* -------------------------------
CONTACT FORM VALIDATION
-------------------------------- */
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');


if (form) {
form.addEventListener('submit', function (e) {
e.preventDefault();


let name = document.getElementById('name').value.trim();
let email = document.getElementById('email').value.trim();
let message = document.getElementById('message').value.trim();


if (name === '' || email === '' || message === '') {
formMessage.textContent = "Please fill out all fields.";
formMessage.style.color = "red";
return;
}


if (!email.includes('@') || !email.includes('.')) {
formMessage.textContent = "Please enter a valid email address.";
formMessage.style.color = "red";
return;
}


formMessage.textContent = "Message sent successfully!";
formMessage.style.color = "green";
form.reset();
});
}