// ============================================
// LEARNING SESSION LOGIC
// ============================================

// Load companion and course data
const selectedCompanion = localStorage.getItem('vedana_selected_companion') || 'mira';
const selectedCourse = localStorage.getItem('vedana_selected_course') || 'python-beg';

// Companion icons
const companionIcons = {
    mira: '🌸',
    riven: '⚡',
    aria: '✨',
    timo: '🐻'
};

// Set companion avatar
const sessionCompanion = document.getElementById('sessionCompanion');
if (sessionCompanion) {
    sessionCompanion.innerHTML = `<span>${companionIcons[selectedCompanion]}</span>`;
}

// Sample lesson content
const lessonMarkdown = `
# Python Variables & Data Types

## Introduction

Variables are containers for storing data values. In Python, you don't need to declare variables before using them - Python automatically determines the data type based on the value you assign.

## Creating Variables

Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.

\`\`\`python
x = 5
y = "Hello"
z = 3.14
\`\`\`

## Data Types

Python has several built-in data types:

- **Integers**: Whole numbers like \`5\`, \`-3\`, \`100\`
- **Floats**: Decimal numbers like \`3.14\`, \`-0.5\`, \`2.0\`
- **Strings**: Text enclosed in quotes like \`"Hello"\`, \`'Python'\`
- **Booleans**: True or False values

## Variable Naming Rules

1. Variable names must start with a letter or underscore
2. Variable names can only contain letters, numbers, and underscores
3. Variable names are case-sensitive (\`age\` and \`Age\` are different)
4. Use descriptive names: \`student_name\` is better than \`sn\`

## Example

\`\`\`python
# Good variable names
user_name = "Alice"
student_age = 20
is_enrolled = True

# Print the variables
print(user_name)
print(student_age)
print(is_enrolled)
\`\`\`

## Practice Task

Try creating your own variables with different data types!
`;

// Load lesson content
document.addEventListener('DOMContentLoaded', () => {
    const lessonContent = document.getElementById('lessonContent');

    if (lessonContent && typeof marked !== 'undefined') {
        lessonContent.innerHTML = marked.parse(lessonMarkdown);
    }

    // Initialize video placeholder (since we don't have actual video)
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const playOverlay = document.getElementById('playOverlay');

    if (playOverlay) {
        playOverlay.addEventListener('click', () => {
            // In a real app, this would play the video
            alert('Video playback would start here. In this demo, we\'re using text content instead.');
            playOverlay.classList.add('hidden');
        });
    }
});

// Handle "Try It Yourself" button
const tryItBtn = document.getElementById('tryItBtn');
const codeEditor = document.getElementById('codeEditor');
const runCodeBtn = document.getElementById('runCodeBtn');
const codeInput = document.getElementById('codeInput');
const codeOutput = document.getElementById('codeOutput');
const feedbackText = document.getElementById('feedbackText');

tryItBtn.addEventListener('click', () => {
    codeEditor.classList.toggle('hidden');

    if (!codeEditor.classList.contains('hidden')) {
        tryItBtn.textContent = '📖 Hide Editor';
        feedbackText.textContent = 'Great! Try writing some Python code. Click "Run Code" to see the output.';
    } else {
        tryItBtn.textContent = '🔧 Try It Yourself';
        feedbackText.textContent = 'Click "Try It Yourself" to start coding! I\'m here to help if you get stuck.';
    }
});

// Handle code execution (demo mode)
runCodeBtn.addEventListener('click', () => {
    const code = codeInput.value;

    // This is a simple demo - in production, you'd use a Python interpreter API
    // For now, we'll just show some feedback

    if (!code.trim()) {
        codeOutput.textContent = 'Error: No code to run!';
        codeOutput.style.color = '#EF4444';
        feedbackText.textContent = 'Oops! You need to write some code first. Try creating a variable like: x = 5';
        return;
    }

    // Simple detection of common patterns
    if (code.includes('print')) {
        codeOutput.textContent = '✓ Code executed successfully!\n\nOutput:\n(In a real environment, your print statements would show here)';
        codeOutput.style.color = '#34D399';
        feedbackText.textContent = 'Excellent work! You\'re using print() to display output. Keep practicing!';
    } else if (code.includes('=')) {
        codeOutput.textContent = '✓ Variables created successfully!\n\nTip: Try adding print() statements to see your variable values.';
        codeOutput.style.color = '#34D399';
        feedbackText.textContent = 'Good job creating variables! Now try printing them with print(variable_name)';
    } else {
        codeOutput.textContent = '✓ Code checked\n\nRemember: Assign values to variables using = and print them with print()';
        codeOutput.style.color = '#FCD34D';
        feedbackText.textContent = 'Keep going! Try creating a variable: my_variable = "Hello Vedana!"';
    }

    // Update user stats
    updateSessionStats();
});

// End session function
function endSession() {
    const confirmed = confirm('Are you sure you want to end this session? Your progress will be saved.');

    if (confirmed) {
        // Update user session count
        updateSessionStats();

        // Add transition
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 300);
    }
}

// Update session statistics
function updateSessionStats() {
    const currentUser = JSON.parse(localStorage.getItem('vedana_current_user'));

    if (currentUser) {
        // Increment sessions
        currentUser.sessions = (currentUser.sessions || 0) + 1;

        // Add random time (for demo)
        currentUser.totalTime = (currentUser.totalTime || 0) + Math.floor(Math.random() * 30) + 15;

        // Add XP
        const xpGain = Math.floor(Math.random() * 20) + 10;
        currentUser.xp = (currentUser.xp || 0) + xpGain;

        // Check for level up
        const maxXP = currentUser.level * 100;
        if (currentUser.xp >= maxXP) {
            currentUser.level = (currentUser.level || 1) + 1;
            currentUser.xp = currentUser.xp - maxXP;
        }

        // Update streak (simplified)
        currentUser.streak = (currentUser.streak || 0) + 1;

        // Save updated user
        localStorage.setItem('vedana_current_user', JSON.stringify(currentUser));
    }
}

// Fade in animation on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
