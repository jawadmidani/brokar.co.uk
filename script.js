// Functionality and Interactivity for Brokar Creative UK LTD Website

document.addEventListener("DOMContentLoaded", function() {

    // 1. Smooth Scrolling for Navigation Links
    // This allows clicking on 'About Us' to smoothly scroll to the #about section.
    // (Note: Modern browsers do this with CSS scroll-behavior, but JS is a reliable fallback)
    const links = document.querySelectorAll('nav ul li a[href^="#"]');

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default instant jump

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Determine header height to offset the scroll (so content isn't covered by the fixed nav)
                const headerHeight = document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: targetElement.offsetTop - (headerHeight - 20), // Adjust the -20 for padding
                    behavior: "smooth"
                });
            }
        });
    }

    // 2. Change Header Style on Scroll
    // When the user scrolls down, the header becomes more compact.
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Add a CSS class defined in style.css
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. (Optional) Basic Mobile Menu Interaction
    // This is a simple proof of concept. For a complex site, you would need a proper "Hamburger" menu icon.
    // However, the base CSS currently hides the menu on mobile (991px) for simplicity.
    console.log("Brokar Creative UK LTD Website Scripts Loaded.");

});