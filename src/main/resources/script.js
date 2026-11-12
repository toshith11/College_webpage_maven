document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll trigger for the Hero Explore button
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Interactive handling for the contact form submission
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Capture the user's name
            const nameField = document.getElementById("name").value;

            // Clear out form inputs
            contactForm.reset();

            // Display success feedback message
            formFeedback.textContent = `Thank you, ${nameField}! Your message has been sent successfully.`;
            formFeedback.classList.remove("hidden");

            // Automatically hide feedback after 4 seconds
            setTimeout(() => {
                formFeedback.classList.add("hidden");
            }, 4000);
        });
    }
});