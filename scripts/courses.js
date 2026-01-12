
const courses = [
    {
        "courseCode": "CSE110",
        "courseName": "Introduction to Programming",
        "credits": 2,
        "completed": true
    },
    {
        "courseCode": "WDD130",
        "courseName": "Web Fundamentals",
        "credits": 2,
        "completed": true
    },
    {
        "courseCode": "WDD131",
        "courseName": "Dynamic Web Fundamentals",
        "credits": 2,
        "completed": true
    },
    {
        "courseCode": "CSE111",
        "courseName": "Basic Data Structures",
        "credits": 2,
        "completed": true
    },
    {
        "courseCode": "CSE210",
        "courseName": "Programming with Classes",
        "credits": 2,
        "completed": false
    },
    {
        "courseCode": "WDD231",
        "courseName": "Frontend Web Development I",
        "credits": 2,
        "completed": false
    }
];

const courseListElement = document.getElementById('course-list');
const totalCreditsElement = document.getElementById('total-credits');
const allCoursesBtn = document.getElementById('allCourses');
const wddCoursesBtn = document.getElementById('wddCourses');
const cseCoursesBtn = document.getElementById('cseCourses');

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
    } else { // 'All'
        filtered = courses;
    }
    displayCourses(filtered);
    updateActiveButton(type);
}

function updateActiveButton(activeType) {
    allCoursesBtn.classList.remove('active');
    wddCoursesBtn.classList.remove('active');
    cseCoursesBtn.classList.remove('active');

    if (activeType === 'All') {
        allCoursesBtn.classList.add('active');
    } else if (activeType === 'WDD') {
        wddCoursesBtn.classList.add('active');
    } else if (activeType === 'CSE') {
        cseCoursesBtn.classList.add('active');
    }
}

allCoursesBtn.addEventListener('click', () => filterCourses('All'));
wddCoursesBtn.addEventListener('click', () => filterCourses('WDD'));
cseCoursesBtn.addEventListener('click', () => filterCourses('CSE'));

document.addEventListener('DOMContentLoaded', () => {
    filterCourses('All');
});