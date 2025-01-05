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
// Track last scroll position for scroll direction
let lastScrollPosition = 0;

document.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        const halfwayVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

        if (halfwayVisible) {
            if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down - trigger particle dissipate animation
                section.classList.add('dissipate');
                section.classList.remove('reappear');
                createParticles(section);
            } else {
                // Scrolling up - reverse particle animation
                section.classList.add('reappear');
                section.classList.remove('dissipate');
            }
        }
    });

    lastScrollPosition = currentScrollPosition;
});

// Function to create particles dynamically
function createParticles(section) {
    // Check if particles already exist to avoid duplicates
    if (section.querySelector('.particle-container')) return;

    const particleContainer = document.createElement('div');
    particleContainer.classList.add('particle-container');
    section.appendChild(particleContainer);

    // Generate 50 particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 1.5}s`; // Random delay for effect
        particleContainer.appendChild(particle);
    }

    // Remove particles after animation
    setTimeout(() => {
        particleContainer.remove();
    }, 3000); // Match animation duration
}

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
