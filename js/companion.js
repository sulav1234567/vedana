// ============================================
// COMPANION SELECTION LOGIC
// ============================================

const companionCards = document.querySelectorAll('.companion-card');
const companionInfo = document.getElementById('companionInfo');
const infoTitle = document.getElementById('infoTitle');
const infoDescription = document.getElementById('infoDescription');
const startLearningBtn = document.getElementById('startLearningBtn');

let selectedCompanion = null;

// Companion details
const companions = {
    mira: {
        name: 'Mira',
        title: 'The Empathetic Guide',
        description: '"Your gentle guide and friend through learning and life." Mira excels at explaining concepts clearly, providing motivation, and offering emotional support throughout your learning journey.'
    },
    riven: {
        name: 'Riven',
        title: 'The Smart Problem-Solver',
        description: '"The clever companion who makes challenges fun to tackle." Riven offers logical solutions, presents ideas analytically, and brings energy and focus to your studies.'
    },
    aria: {
        name: 'Aria',
        title: 'The Creative Spark',
        description: '"The imaginative friend who sparks curiosity and joy." Aria suggests creative approaches, lifts your spirits, and encourages exploration and curiosity in your learning.'
    },
    timo: {
        name: 'Timo',
        title: 'Your Playful Buddy',
        description: '"Let\'s explore and play!" Timo makes learning fun through adventures, games, and storytelling. Perfect for young learners!'
    }
};

// Handle companion card clicks
companionCards.forEach(card => {
    const selectBtn = card.querySelector('.select-btn');

    selectBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        const companion = card.dataset.companion;

        // Don't select if it's Timo (coming soon)
        if (companion === 'timo') {
            return;
        }

        // Remove selection from all cards
        companionCards.forEach(c => c.classList.remove('selected'));

        // Add selection to clicked card
        card.classList.add('selected');

        // Set selected companion
        selectedCompanion = companion;

        // Update info panel
        const companionData = companions[companion];
        infoTitle.textContent = `${companionData.name} - ${companionData.title}`;
        infoDescription.textContent = companionData.description;

        // Show info panel
        companionInfo.classList.remove('hidden');

        // Scroll to info panel
        companionInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

// Handle start learning button
startLearningBtn.addEventListener('click', () => {
    if (selectedCompanion) {
        // Save selected companion
        localStorage.setItem('vedana_selected_companion', selectedCompanion);

        // Add transition effect
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'session.html';
        }, 300);
    }
});

// Load previously selected companion if exists
window.addEventListener('load', () => {
    const savedCompanion = localStorage.getItem('vedana_selected_companion');
    if (savedCompanion) {
        const card = document.querySelector(`[data-companion="${savedCompanion}"]`);
        if (card && savedCompanion !== 'timo') {
            card.classList.add('selected');
            selectedCompanion = savedCompanion;

            const companionData = companions[savedCompanion];
            infoTitle.textContent = `${companionData.name} - ${companionData.title}`;
            infoDescription.textContent = companionData.description;
            companionInfo.classList.remove('hidden');
        }
    }

    // Fade in animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
