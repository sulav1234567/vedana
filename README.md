# SkillOra - AI-Powered Learning Platform

A modern, static web application for personalized learning with AI companions. Built with pure HTML, CSS, and JavaScript featuring premium dark glassmorphism UI.

## 🌟 Features

- **Authentication System**: Login/signup with LocalStorage-based demo authentication
- **AI Companions**: Choose from 4 AI tutors (Mira, Riven, Aria, Timo)
- **Course Selection**: Multiple learning paths including Python, English, and AI
- **Interactive Dashboard**: Track sessions, time, streaks, and XP/levels
- **Learning Sessions**: Video lessons with interactive code editor
- **Progress Tracking**: Automatic stat updates and badge system
- **Responsive Design**: Mobile-friendly interface
- **Premium UI**: Dark glassmorphism effects with smooth animations

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. Download or clone the SkillOra folder
2. Open `index.html` in your web browser

That's it! The application runs entirely in your browser.

## 📁 Project Structure

```
SkillOra/
├── index.html              # Login/Signup page
├── dashboard.html          # Main dashboard
├── materials.html          # Course selection
├── companion.html          # AI companion picker
├── session.html            # Learning session
├── css/
│   ├── main.css           # Design system & global styles
│   ├── login.css          # Authentication page styles
│   ├── dashboard.css      # Dashboard styles
│   ├── materials.css      # Materials page styles
│   ├── companion.css      # Companion picker styles
│   └── session.css        # Session page styles
├── js/
│   ├── auth.js            # Authentication logic
│   ├── dashboard.js       # Dashboard functionality
│   ├── materials.js       # Course selection logic
│   ├── companion.js       # Companion selection logic
│   └── session.js         # Learning session logic
├── assets/
│   ├── images/            # Image assets
│   └── icons/             # Icon assets
└── README.md              # This file
```

## 🎨 Design Features

### Color Palette
- **Primary**: Purple/Indigo (#6366F1, #4F46E5)
- **Secondary**: Pink, Blue, Green, Purple variants
- **Background**: Dark gradients (#0F0F1A, #1A1A2E)

### UI Elements
- Glassmorphism cards with backdrop blur
- Smooth animations and transitions
- Custom scrollbars
- Gradient buttons with hover effects
- Progress bars with animations

## 📖 Usage Guide

### 1. Login or Create Account

Navigate to `index.html` and either:
- **Demo Login**: Username: `demo`, Password: `demo`
- **Create Account**: Click "Sign Up" and fill in the form

### 2. Dashboard

View your learning stats:
- Total sessions completed
- Time spent learning
- Current learning streak
- Level and XP progress

### 3. Start Learning

Click "Start Session" → Select Course → Choose AI Companion → Begin Lesson

### 4. Interactive Session

- Watch video lessons (demo placeholder)
- Try coding exercises
- Get AI companion feedback
- Track progress automatically

## 💾 Data Storage

All user data is stored in browser LocalStorage:
- `skillora_users`: User accounts
- `skillora_current_user`: Active session
- `skillora_selected_course`: Chosen course
- `skillora_selected_companion`: Selected AI tutor

## 🔧 Customization

### Adding New Courses
Edit `materials.html` and `js/materials.js` to add course options.

### Creating New Companions
Modify `companion.html`, `css/companion.css`, and `js/companion.js`.

### Changing Colors
Update CSS variables in `css/main.css`:

```css
:root {
  --primary-500: #6366F1;
  --primary-600: #4F46E5;
  /* ... */
}
```

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🎯 Future Enhancements

- Real video content integration
- Backend API for user accounts
- Python code execution via API
- More courses and companions
- Achievement system
- Social features

## 📄 License

This is a demo/educational project. Feel free to use and modify as needed.

## 👥 Credits

Designed and developed for SkillOra learning platform.

---

**Note**: This is a static demo. For production use, implement proper backend authentication, database storage, and secure user data handling.
