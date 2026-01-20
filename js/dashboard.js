// ============================================
// DASHBOARD LOGIC
// ============================================

// Check if user is logged in
const currentUser = JSON.parse(localStorage.getItem('vedana_current_user'));

if (!currentUser) {
    window.location.href = 'index.html';
}

// Display user information
document.addEventListener('DOMContentLoaded', () => {
    // Set user name
    const userName = document.getElementById('userName');
    if (userName) {
        userName.textContent = currentUser.fullname || currentUser.username;
    }

    // Set user initials in avatar
    const userInitials = document.getElementById('userInitials');
    if (userInitials) {
        const initials = currentUser.fullname
            ? currentUser.fullname.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
            : currentUser.username[0].toUpperCase();
        userInitials.textContent = initials;
    }

    // Display stats
    displayStats();

    // Animate progress bar
    animateProgressBar();

    // Animate stats on scroll
    animateOnScroll();
});

// Display user stats
function displayStats() {
    const totalSessions = document.getElementById('totalSessions');
    const totalTime = document.getElementById('totalTime');
    const streak = document.getElementById('streak');
    const level = document.getElementById('level');
    const xpText = document.getElementById('xpText');

    if (totalSessions) {
        animateNumber(totalSessions, 0, currentUser.sessions || 0, 1000);
    }

    if (totalTime) {
        const hours = Math.floor((currentUser.totalTime || 0) / 60);
        const minutes = (currentUser.totalTime || 0) % 60;
        totalTime.textContent = `${hours}h ${minutes}m`;
    }

    if (streak) {
        animateNumber(streak, 0, currentUser.streak || 0, 1000, ' Days');
    }

    if (level) {
        level.textContent = `Level ${currentUser.level || 1}`;
    }

    if (xpText) {
        const maxXP = (currentUser.level || 1) * 100;
        xpText.textContent = `${currentUser.xp || 0} XP / ${maxXP} XP`;
    }
}

// Animate number counting
function animateNumber(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Animate progress bar
function animateProgressBar() {
    const xpProgress = document.getElementById('xpProgress');
    if (xpProgress) {
        const maxXP = (currentUser.level || 1) * 100;
        const percentage = ((currentUser.xp || 0) / maxXP) * 100;

        setTimeout(() => {
            xpProgress.style.width = `${percentage}%`;
        }, 500);
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const elements = document.querySelectorAll('.stat-card, .activity-card, .badges-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Mobile sidebar toggle
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.createElement('button');
menuBtn.className = 'mobile-menu-btn';
menuBtn.innerHTML = '☰';
menuBtn.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
    color: var(--text-primary);
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
`;

document.body.appendChild(menuBtn);

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Show mobile menu button on small screens
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
        menuBtn.style.display = 'flex';
        menuBtn.style.alignItems = 'center';
        menuBtn.style.justifyContent = 'center';
    } else {
        menuBtn.style.display = 'none';
        sidebar.classList.remove('open');
    }
});

// Initial check
if (window.innerWidth <= 1024) {
    menuBtn.style.display = 'flex';
    menuBtn.style.alignItems = 'center';
    menuBtn.style.justifyContent = 'center';
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024 &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target) &&
        sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// Logout function (optional)
function logout() {
    localStorage.removeItem('skillora_current_user');
    window.location.href = 'index.html';
}
