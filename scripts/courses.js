const courses = [
    { "courseCode": "CSE110", "courseName": "Introduction to Programming", "credits": 2, "completed": true, "certificate": "Web and Computer Programming", "description": "This course introduces students to the fundamentals of programming.", "technology": ["Python"] },
    { "courseCode": "WDD130", "courseName": "Web Fundamentals", "credits": 2, "completed": true, "certificate": "Web and Computer Programming", "description": "Introduction to HTML and CSS.", "technology": ["HTML", "CSS"] },
    { "courseCode": "WDD131", "courseName": "Dynamic Web Fundamentals", "credits": 2, "completed": true, "certificate": "Web and Computer Programming", "description": "Building dynamic websites.", "technology": ["HTML", "CSS", "JS"] },
    { "courseCode": "CSE111", "courseName": "Basic Data Structures", "credits": 2, "completed": true, "certificate": "Web and Computer Programming", "description": "Learn to store data efficiently.", "technology": ["Python", "Algorithms"] },
    { "courseCode": "CSE210", "courseName": "Programming with Classes", "credits": 2, "completed": false, "certificate": "Web and Computer Programming", "description": "Object Oriented Programming.", "technology": ["C#", "Classes"] },
    { "courseCode": "WDD231", "courseName": "Frontend Web Development I", "credits": 2, "completed": false, "certificate": "Web and Computer Programming", "description": "Advanced frontend techniques.", "technology": ["HTML", "CSS", "JS", "APIs"] }
];

const courseListElement = document.getElementById('course-list');
const totalCreditsElement = document.getElementById('total-credits');
const allCoursesBtn = document.getElementById('allCourses');
const wddCoursesBtn = document.getElementById('wddCourses');
const cseCoursesBtn = document.getElementById('cseCourses');
const courseDetails = document.getElementById('course-details');

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
        <button id="closeModal" autofocus>❌</button>
        <h2>${course.courseCode}</h2>
        <h3>${course.courseName}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    
    courseDetails.showModal();

    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener("click", (e) => {
        e.stopPropagation();
        courseDetails.close();
    });
}

courseDetails.addEventListener('click', (event) => {
    if (event.target === courseDetails) {
        courseDetails.close();
    }
});

function displayCourses(courseArray) {
    courseListElement.innerHTML = ''; 
    let totalCredits = 0;

    courseArray.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        if (course.completed) {
            courseCard.classList.add('completed-course');
        }

        courseCard.innerHTML = `
            <h3>${course.courseCode}</h3>
            <p>${course.courseName}</p>
            <p>Credits: ${course.credits}</p>
        `;

        courseCard.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        courseListElement.appendChild(courseCard);
        totalCredits += course.credits;
    });

    totalCreditsElement.textContent = totalCredits; 
}

function filterCourses(type) {
    let filtered = [];
    if (type === 'WDD') {
        filtered = courses.filter(course => course.courseCode.startsWith('WDD'));
    } else if (type === 'CSE') {
        filtered = courses.filter(course => course.courseCode.startsWith('CSE'));
    } else {
        filtered = courses;
    }
    displayCourses(filtered);
    updateActiveButton(type);
}

function updateActiveButton(activeType) {
    allCoursesBtn.classList.remove('active');
    wddCoursesBtn.classList.remove('active');
    cseCoursesBtn.classList.remove('active');

    if (activeType === 'All') allCoursesBtn.classList.add('active');
    else if (activeType === 'WDD') wddCoursesBtn.classList.add('active');
    else if (activeType === 'CSE') cseCoursesBtn.classList.add('active');
}

allCoursesBtn.addEventListener('click', () => filterCourses('All'));
wddCoursesBtn.addEventListener('click', () => filterCourses('WDD'));
cseCoursesBtn.addEventListener('click', () => filterCourses('CSE'));

document.addEventListener('DOMContentLoaded', () => {
    filterCourses('All');
});