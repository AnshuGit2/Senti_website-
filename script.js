document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission for contact form
    const contactForm = document.querySelector('#contact form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Simple form validation
        if (name === '' || email === '' || message === '') {
            alert('All fields are required!');
            return;
        }

        // Simulate form submission
        alert('Form submitted successfully!');

        // Clear the form
        contactForm.reset();
    });

    // Handle sign-in form submission
    const signInForm = document.querySelector('#sign-in-form');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        // Simple form validation
        if (username === '' || password === '') {
            alert('Username and password are required!');
            return;
        }

        // Redirect to welcome page (assuming a simple validation)
        window.location.href = 'welcome.html';
    });
});
