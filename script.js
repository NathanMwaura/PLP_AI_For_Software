// Course Data
        const courses = [
            {
                id: 1,
                title: "Web Development Fundamentals",
                description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
                duration: "8 weeks",
                level: "Beginner",
                icon: "💻",
                instructor: "Sarah Johnson",
                lessons: [
                    "Introduction to HTML",
                    "CSS Styling Basics",
                    "JavaScript Fundamentals",
                    "Building Your First Website",
                    "Responsive Design",
                    "Final Project"
                ],
                students: 1234
            },
            {
                id: 2,
                title: "Python for Data Science",
                description: "Master Python programming and data analysis with pandas, numpy, and visualization libraries.",
                duration: "10 weeks",
                level: "Intermediate",
                icon: "🐍",
                instructor: "Dr. Michael Chen",
                lessons: [
                    "Python Basics",
                    "NumPy Arrays",
                    "Pandas DataFrames",
                    "Data Visualization",
                    "Statistical Analysis",
                    "Machine Learning Intro",
                    "Real-world Projects"
                ],
                students: 892
            },
            {
                id: 3,
                title: "Digital Marketing Mastery",
                description: "Comprehensive guide to SEO, social media marketing, and content strategy.",
                duration: "6 weeks",
                level: "Beginner",
                icon: "📱",
                instructor: "Emma Rodriguez",
                lessons: [
                    "Marketing Fundamentals",
                    "SEO Optimization",
                    "Social Media Strategy",
                    "Content Marketing",
                    "Email Campaigns",
                    "Analytics & ROI"
                ],
                students: 567
            },
            {
                id: 4,
                title: "UI/UX Design Principles",
                description: "Create beautiful and user-friendly interfaces with modern design thinking.",
                duration: "7 weeks",
                level: "Intermediate",
                icon: "🎨",
                instructor: "James Wilson",
                lessons: [
                    "Design Thinking",
                    "User Research",
                    "Wireframing",
                    "Prototyping",
                    "Visual Design",
                    "Usability Testing"
                ],
                students: 743
            }
        ];

        // State Management
        let currentUser = null;
        let completedCourses = [];
        let currentCourseId = null;

        // Auth Functions
        function switchTab(tab) {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            const tabs = document.querySelectorAll('.auth-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            
            if (tab === 'login') {
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
                tabs[0].classList.add('active');
            } else {
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
                tabs[1].classList.add('active');
            }
        }

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const email = document.getElementById('loginEmail').value;
            const name = email.split('@')[0];
            login(name);
            return false;
        });

        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const name = document.getElementById('signupName').value;
            login(name);
            return false;
        });

        function login(name) {
            currentUser = name;
            document.getElementById('userName').textContent = name;
            document.getElementById('authSection').style.display = 'none';
            document.getElementById('platform').classList.add('active');
            renderCourses();
            updateProgress();
        }

        function logout() {
            currentUser = null;
            completedCourses = [];
            document.getElementById('authSection').style.display = 'block';
            document.getElementById('platform').classList.remove('active');
            document.getElementById('loginEmail').value = '';
            document.getElementById('loginPassword').value = '';
        }

        // Course Rendering
        function renderCourses() {
            const grid = document.getElementById('coursesGrid');
            grid.innerHTML = courses.map(course => `
                <div class="course-card ${completedCourses.includes(course.id) ? 'completed' : ''}" 
                     onclick="openCourseDetail(${course.id})">
                    <div class="course-image">${course.icon}</div>
                    <div class="course-content">
                        <div class="course-header">
                            <div>
                                <div class="course-title">${course.title}</div>
                                <div class="course-duration">⏱️ ${course.duration}</div>
                            </div>
                        </div>
                        <div class="course-description">${course.description}</div>
                        <div class="course-footer">
                            <span class="course-level">${course.level}</span>
                            ${completedCourses.includes(course.id) ? 
                                '<span class="completed-badge">✓ Completed</span>' : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Modal Functions
        function openCourseDetail(courseId) {
            currentCourseId = courseId;
            const course = courses.find(c => c.id === courseId);
            const modal = document.getElementById('courseModal');
            
            document.getElementById('modalTitle').textContent = course.title;
            
            document.getElementById('courseDetailsContent').innerHTML = `
                <div class="detail-item">
                    <span class="detail-icon">👨‍🏫</span>
                    <span><strong>Instructor:</strong> ${course.instructor}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">⏱️</span>
                    <span><strong>Duration:</strong> ${course.duration}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">📊</span>
                    <span><strong>Level:</strong> ${course.level}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">👥</span>
                    <span><strong>Students Enrolled:</strong> ${course.students.toLocaleString()}</span>
                </div>
                <p style="margin-top: 20px; color: #666; line-height: 1.6;">${course.description}</p>
            `;
            
            document.getElementById('lessonsList').innerHTML = course.lessons.map((lesson, index) => `
                <div class="lesson-item">
                    <div style="display: flex; align-items: center;">
                        <span class="lesson-number">${index + 1}</span>
                        <span>${lesson}</span>
                    </div>
                    <span style="color: #999;">30 min</span>
                </div>
            `).join('');
            
            const completeBtn = document.getElementById('completeBtn');
            if (completedCourses.includes(courseId)) {
                completeBtn.textContent = '✓ Completed';
                completeBtn.disabled = true;
            } else {
                completeBtn.textContent = 'Mark as Completed';
                completeBtn.disabled = false;
            }
            
            modal.classList.add('active');
        }

        function closeModal() {
            document.getElementById('courseModal').classList.remove('active');
        }

        function completeCourse() {
            if (!completedCourses.includes(currentCourseId)) {
                completedCourses.push(currentCourseId);
                renderCourses();
                updateProgress();
                
                const completeBtn = document.getElementById('completeBtn');
                completeBtn.textContent = '✓ Completed';
                completeBtn.disabled = true;
            }
        }

        function updateProgress() {
            const progress = (completedCourses.length / courses.length) * 100;
            const progressFill = document.getElementById('progressFill');
            const progressText = document.getElementById('progressText');
            
            progressFill.style.width = progress + '%';
            progressText.textContent = Math.round(progress) + '% Complete';
            
            if (progress > 0) {
                progressFill.textContent = Math.round(progress) + '%';
            }
        }

        // Close modal when clicking outside
        document.getElementById('courseModal').addEventListener('click', (e) => {
            if (e.target.id === 'courseModal') {
                closeModal();
            }
        });
