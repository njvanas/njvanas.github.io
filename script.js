// Track the last scroll position to determine scroll direction
let lastScrollPosition = 0;

document.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isScrollingDown = currentScrollPosition > lastScrollPosition;

        if (isScrollingDown) {
            // Add 'visible' class when scrolling down if section is in the viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add('visible');
            }
        } else {
            // Remove 'visible' class when scrolling up if section is out of the viewport
            if (rect.top > window.innerHeight || rect.bottom < 0) {
                section.classList.remove('visible');
            }
        }
    });

    // Update last scroll position
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
