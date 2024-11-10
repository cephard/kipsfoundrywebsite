document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    });

    cards.forEach((card) => {
        observer.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hero-section, .services-section, .testimonial-section, .card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((element) => {
        observer.observe(element);
        element.style.animationPlayState = 'paused';
    });
});
