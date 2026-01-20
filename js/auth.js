// ============================================
// AUTHENTICATION LOGIC
// ============================================

// Form elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const toggleLink = document.getElementById('toggleLink');
const formTitle = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const toggleText = document.getElementById('toggleText');

// Toggle between login and signup
toggleLink.addEventListener('click', (e) => {
    e.preventDefault();

    if (loginForm.classList.contains('hidden')) {
        // Show login form
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        formTitle.textContent = 'Welcome Back';
        formSubtitle.textContent = 'Sign in to continue your learning journey';
        toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggleLink">Sign Up</a>';
    } else {
        // Show signup form
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        formTitle.textContent = 'Create Account';
        formSubtitle.textContent = 'Join Vedana and start learning today';
        toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleLink">Sign In</a>';
    }

    // Re-attach event listener to new toggle link
    document.getElementById('toggleLink').addEventListener('click', arguments.callee);
});

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists
    const users = JSON.parse(localStorage.getItem('vedana_users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Store current user
        localStorage.setItem('vedana_current_user', JSON.stringify(user));

        // Add smooth transition
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 300);
    } else {
        alert('Invalid username or password. Try username: "demo" and password: "demo" or create a new account.');
    }
});

// Handle signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullname = document.getElementById('signupFullname').value;
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    // Check if username already exists
    const users = JSON.parse(localStorage.getItem('vedana_users') || '[]');
    if (users.find(u => u.username === username)) {
        alert('Username already exists!');
        return;
    }

    // Create new user
    const newUser = {
        fullname,
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
        sessions: 0,
        totalTime: 0,
        streak: 0,
        level: 1,
        xp: 0
    };

    users.push(newUser);
    localStorage.setItem('vedana_users', JSON.stringify(users));
    localStorage.setItem('vedana_current_user', JSON.stringify(newUser));

    // Add smooth transition
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 300);
});

// Create demo account if it doesn't exist
window.addEventListener('load', () => {
    const users = JSON.parse(localStorage.getItem('vedana_users') || '[]');

    if (!users.find(u => u.username === 'demo')) {
        users.push({
            fullname: 'Demo User',
            username: 'demo',
            email: 'demo@vedana.com',
            password: 'demo',
            createdAt: new Date().toISOString(),
            sessions: 12,
            totalTime: 850,
            streak: 3,
            level: 3,
            xp: 45
        });
        localStorage.setItem('vedana_users', JSON.stringify(users));
    }

    // Fade in animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
