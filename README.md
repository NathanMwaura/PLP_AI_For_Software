# 🎓 LearnHub - Mini E-Learning Platform

A modern, interactive e-learning platform prototype built with HTML, CSS, and JavaScript. This project demonstrates core web development concepts including user authentication, dynamic content rendering, and progress tracking.

![Platform Preview](https://img.shields.io/badge/Status-Prototype-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Course Catalog](#course-catalog)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🔐 User Authentication
- **Login & Sign Up**: Dual authentication system with tab switching
- **User Session**: Personalized welcome message with user's name
- **Logout Functionality**: Secure session termination

### 📚 Course Management
- **Course Catalog**: Browse 4 diverse courses across different domains
- **Detailed Course View**: Modal popup with comprehensive course information
- **Course Metadata**: 
  - Instructor details
  - Course duration
  - Difficulty level
  - Student enrollment count
  - Lesson breakdown

### 📊 Progress Tracking
- **Completion Status**: Mark courses as completed
- **Visual Progress Bar**: Real-time progress visualization
- **Percentage Calculation**: Automatic completion percentage updates
- **Completed Badges**: Visual indicators for finished courses

### 🎨 Modern UI/UX
- **Gradient Backgrounds**: Eye-catching purple gradient theme
- **Smooth Animations**: CSS transitions and keyframe animations
- **Hover Effects**: Interactive card animations
- **Responsive Design**: Mobile and desktop compatibility
- **Modal System**: Clean overlay for detailed course information

---

## 🚀 Demo

### Getting Started
1. Open the platform and you'll see the authentication screen
2. Choose to **Login** or **Sign Up** (any credentials work for prototype)
3. After authentication, explore the course catalog
4. Click any course card to view detailed information
5. Mark courses as completed to track your learning progress

### User Flow
```
Authentication → Course Catalog → Course Details → Mark Complete → Track Progress
```

---

## 💻 Installation

### Option 1: Direct File Usage
1. Download the HTML file
2. Open it in any modern web browser (Chrome, Firefox, Safari, Edge)
3. No server or build process required!

### Option 2: Local Server (Optional)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then navigate to http://localhost:8000
```

### Requirements
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- JavaScript enabled
- No external dependencies or installations needed

---

## 📖 Usage

### Authentication

#### Login
```
1. Click the "Login" tab (default)
2. Enter any email address
3. Enter any password
4. Click "Login" button
```

#### Sign Up
```
1. Click the "Sign Up" tab
2. Enter your full name
3. Enter your email address
4. Create a password
5. Click "Sign Up" button
```

> **Note**: This is a prototype - all authentication is simulated and data is stored in memory only.

### Browsing Courses

Each course card displays:
- **Course Icon**: Visual representation
- **Course Title**: Name of the course
- **Description**: Brief overview
- **Duration**: Estimated completion time
- **Level**: Difficulty rating (Beginner/Intermediate)
- **Completion Badge**: Shows if you've completed the course

### Viewing Course Details

Click any course card to open a modal with:
- Full course description
- Instructor name
- Duration and difficulty level
- Number of enrolled students
- Complete lesson breakdown with time estimates
- "Mark as Completed" button

### Tracking Progress

- Progress bar updates automatically when you complete courses
- Percentage displayed in real-time
- Completed courses show a green checkmark badge
- Progress persists during your current session

---

## 📁 Project Structure

```
learnhub/
│
├── index.html              # Main application file (all-in-one)
│   ├── HTML Structure      # Semantic markup
│   ├── CSS Styles          # Embedded styling
│   └── JavaScript Logic    # Client-side functionality
│
└── README.md              # This file
```

### Code Organization

The single HTML file contains three main sections:

1. **HTML Structure**
   - Authentication section (login/signup forms)
   - Main platform (header, progress, courses)
   - Course detail modal

2. **CSS Styling**
   - Reset and base styles
   - Authentication styles
   - Platform layout and components
   - Modal and animation styles
   - Responsive media queries

3. **JavaScript Logic**
   - Course data array
   - State management (users, completed courses)
   - Authentication functions
   - Course rendering
   - Modal controls
   - Progress calculations

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Client-side logic and interactivity

### CSS Features
- Flexbox & Grid layouts
- CSS Gradients
- CSS Animations & Transitions
- Media Queries
- Custom properties (CSS variables could be added)

### JavaScript Features
- Arrow functions
- Template literals
- Array methods (map, find, includes)
- Event listeners
- DOM manipulation
- State management

### Design Patterns
- Component-based structure
- Event-driven architecture
- Separation of concerns
- Responsive design principles

---

## 📚 Course Catalog

### 1. Web Development Fundamentals
- **Icon**: 💻
- **Duration**: 8 weeks
- **Level**: Beginner
- **Instructor**: Sarah Johnson
- **Students**: 1,234
- **Lessons**: 6 (HTML, CSS, JavaScript, First Website, Responsive Design, Final Project)

### 2. Python for Data Science
- **Icon**: 🐍
- **Duration**: 10 weeks
- **Level**: Intermediate
- **Instructor**: Dr. Michael Chen
- **Students**: 892
- **Lessons**: 7 (Python Basics, NumPy, Pandas, Visualization, Statistics, ML Intro, Projects)

### 3. Digital Marketing Mastery
- **Icon**: 📱
- **Duration**: 6 weeks
- **Level**: Beginner
- **Instructor**: Emma Rodriguez
- **Students**: 567
- **Lessons**: 6 (Fundamentals, SEO, Social Media, Content, Email, Analytics)

### 4. UI/UX Design Principles
- **Icon**: 🎨
- **Duration**: 7 weeks
- **Level**: Intermediate
- **Instructor**: James Wilson
- **Students**: 743
- **Lessons**: 6 (Design Thinking, Research, Wireframing, Prototyping, Visual Design, Testing)

---

## 🚀 Future Enhancements

### Phase 1: Core Features
- [ ] Real backend integration (Node.js/Express)
- [ ] Database storage (MongoDB/PostgreSQL)
- [ ] Persistent user authentication (JWT)
- [ ] Password hashing and security
- [ ] Email verification

### Phase 2: Enhanced Functionality
- [ ] Video lesson player
- [ ] Quiz and assessment system
- [ ] Certificate generation
- [ ] Course reviews and ratings
- [ ] Discussion forums
- [ ] Search and filter functionality

### Phase 3: Advanced Features
- [ ] Real-time notifications
- [ ] Payment integration
- [ ] Course recommendations (AI-powered)
- [ ] Mobile app (React Native)
- [ ] Instructor dashboard
- [ ] Analytics and reporting
- [ ] Multi-language support

### Phase 4: Scalability
- [ ] Microservices architecture
- [ ] CDN integration
- [ ] Caching strategies
- [ ] Load balancing
- [ ] Cloud deployment (AWS/Azure/GCP)

---

## 🎯 Learning Objectives

This project demonstrates proficiency in:

1. **HTML5**
   - Semantic elements
   - Form handling
   - Modal structures
   - Accessibility considerations

2. **CSS3**
   - Modern layout techniques (Flexbox, Grid)
   - Animations and transitions
   - Responsive design
   - Component styling

3. **JavaScript**
   - DOM manipulation
   - Event handling
   - State management
   - Dynamic content rendering
   - Array manipulation

4. **Web Development Best Practices**
   - Clean code structure
   - User experience design
   - Interactive UI elements
   - Progressive enhancement

---

## 🤝 Contributing

While this is a prototype project, contributions are welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas
- Add more courses to the catalog
- Implement new UI themes
- Enhance accessibility features
- Add unit tests
- Improve mobile responsiveness
- Create additional animations

---

## 🐛 Known Issues

1. **Data Persistence**: Course completion data is lost on page refresh (stored in memory only)
2. **Authentication**: No real validation or security measures
3. **Browser Compatibility**: Optimized for modern browsers only
4. **Offline Support**: No service worker implementation

> **Note**: These are expected limitations for a prototype. See [Future Enhancements](#future-enhancements) for planned improvements.

---

## 📝 License

This project is created for educational purposes as part of the VibeCoding Week 1 assignment.

**MIT License** - Feel free to use this code for learning and personal projects.

```
MIT License

Copyright (c) 2025 LearnHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Nathan Waweru**
- Email: nathanwaweru75@gmail.com
- Project: VibeCoding Week 1 Assignment

---

## 🙏 Acknowledgments

- **VibeCoding Program**: For the project inspiration and learning opportunity
- **Modern Web Design Trends**: Inspiration from current design patterns
- **Open Source Community**: For tools and resources

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Known Issues](#known-issues) section
2. Review the [Usage](#usage) guide
3. Open an issue in the repository
4. Contact the author via email

---

## 🌟 Screenshots

### Login Screen
- Clean authentication interface
- Tab switching between Login/Sign Up
- Gradient background with smooth animations

### Course Catalog
- Grid layout with course cards
- Visual icons and metadata
- Progress tracking section
- Hover effects on cards

### Course Details Modal
- Comprehensive course information
- Lesson breakdown
- Instructor details
- Completion button

### Progress Tracking
- Real-time progress bar
- Percentage calculation
- Completion badges

---

## 💡 Tips for Users

1. **First Time Users**: Start with the "Web Development Fundamentals" course
2. **Track Your Progress**: Complete courses in order of difficulty
3. **Explore Details**: Click each course to see full lesson breakdowns
4. **Session Persistence**: Note that data resets on page refresh (prototype limitation)

---

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Basic authentication system
- 4 sample courses
- Progress tracking
- Course detail modals
- Responsive design

---

**Happy Learning! 🎓✨**

Built with ❤️ for the VibeCoding community
