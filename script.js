// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createFloatingHearts();
    startCountdown();
    addNavigationArrows();
});

// Create twinkling stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create floating hearts
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const hearts = ['💕', '💖', '💗', '💝', '✨'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-20px';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heart.style.animationDuration = (Math.random() * 4 + 5) + 's';
        heartsContainer.appendChild(heart);
    }
}


// Navigate between sections
function goToSection(sectionId) {
    // Remove active class from all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Add active class to target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Handle "Yes" button click
function handleYes() {
    const surpriseContainer = document.getElementById('surprise');
    surpriseContainer.innerHTML = `
        <h3>🎉 You made me the happiest person alive! 🎉</h3>
        <p>I promise to love you, cherish you, and make you smile every single day for the rest of our lives. This is just the beginning of our beautiful forever.</p>
    `;
    surpriseContainer.classList.remove('hidden');
    
    // Create confetti
    createConfetti();
    
    // Navigate to celebration page after a short delay
    setTimeout(() => {
        goToSection('celebration');
    }, 2000);
}

// Handle "Maybe" button click (playful)
function handleMaybe() {
    const surpriseContainer = document.getElementById('surprise');
    const messages = [
        "Take your time, I'll wait forever... 😊",
        "Your love is worth the wait! 💕",
        "No pressure, just know I adore you! 😘",
        "I'm patient... or at least I will be for you! 💫"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    surpriseContainer.innerHTML = `
        <h3>😊 Take your time...</h3>
        <p>${randomMessage}</p>
    `;
    surpriseContainer.classList.remove('hidden');
}

// Create confetti animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const confettiPieces = 50;
    const colors = ['#f5576c', '#f093fb', '#667eea', '#11998e', '#38ef7d', '#fa709a', '#fee140'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        const activeSection = document.querySelector('.section.active');
        const nextSection = activeSection.nextElementSibling;
        if (nextSection && nextSection.classList.contains('section')) {
            goToSection(nextSection.id);
        }
    } else if (event.key === 'ArrowLeft') {
        const activeSection = document.querySelector('.section.active');
        const prevSection = activeSection.previousElementSibling;
        if (prevSection && prevSection.classList.contains('section')) {
            goToSection(prevSection.id);
        }
    }
});

// Add navigation arrows hint
function addNavigationArrows() {
    const hint = document.createElement('div');
    hint.style.position = 'fixed';
    hint.style.bottom = '20px';
    hint.style.right = '20px';
    hint.style.color = 'rgba(255, 255, 255, 0.6)';
    hint.style.fontSize = '0.9rem';
    hint.style.zIndex = '100';
    hint.textContent = '← Use arrow keys to navigate →';
    document.body.appendChild(hint);
}
