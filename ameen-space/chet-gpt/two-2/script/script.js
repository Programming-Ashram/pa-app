document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Thank you for reaching out, ' + name + '!');
        // Here you can integrate an email service (like EmailJS, Formspree, etc.) or backend
    } else {
        alert('Please fill in all fields.');
    }
});
