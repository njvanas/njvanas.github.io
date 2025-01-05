// Ensure the loader displays for 10 seconds and then shows the rest of the site
window.addEventListener('load', () => {
    // Add 'loading' class to body to show only the pre-loader
    document.body.classList.add('loading');

    setTimeout(() => {
        // After 10 seconds, remove 'loading' class and add 'loaded'
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 10000); // Delay for 10 seconds
});

// Track the last scroll position to determine scroll direction
let lastScrollPosition = 0;

document.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    // Check each section for visibility
    document.querySelectorAll('section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
            // Add 'visible' class when the section is in the viewport
            section.classList.add('visible');
        } else {
            // Remove 'visible' class when the section is out of the viewport
            section.classList.remove('visible');
        }
    });

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
});

// Smooth scrolling to sections when buttons are clicked
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Toggle dark mode for the website
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
}

// Highlight the active navigation button
document.querySelectorAll('nav button').forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('nav button').forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
