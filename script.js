document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("formResponse").textContent = 'Thank you for your message!';
            this.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    document.getElementById("formResponse").textContent = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    document.getElementById("formResponse").textContent = 'Oops! There was a problem submitting your form';
                }
            });
        }
    })
    .catch(error => {
        document.getElementById("formResponse").textContent = 'Oops! There was a problem submitting your form';
    });
});
