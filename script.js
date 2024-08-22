document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // This is where you would normally handle the form submission, e.g., via AJAX
    // For now, we'll just display a success message

    document.getElementById("formResponse").textContent = `Thank you, ${name}! We have received your message.`;

    // Clear the form fields
    document.getElementById("contactForm").reset();
});
