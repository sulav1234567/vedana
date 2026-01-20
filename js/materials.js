// ============================================
// MATERIALS SELECTION LOGIC
// ============================================

const courseSelect = document.getElementById('courseSelect');
const continueBtn = document.getElementById('continueBtn');

// Enable continue button when course is selected
courseSelect.addEventListener('change', () => {
    if (courseSelect.value) {
        continueBtn.disabled = false;

        // Save selected course
        localStorage.setItem('vedana_selected_course', courseSelect.value);
    } else {
        continueBtn.disabled = true;
    }
});

// Handle continue button click
continueBtn.addEventListener('click', () => {
    if (courseSelect.value) {
        // Add transition effect
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'companion.html';
        }, 300);
    }
});

// Load previously selected course if exists
window.addEventListener('load', () => {
    const savedCourse = localStorage.getItem('vedana_selected_course');
    if (savedCourse) {
        courseSelect.value = savedCourse;
        continueBtn.disabled = false;
    }

    // Fade in animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
