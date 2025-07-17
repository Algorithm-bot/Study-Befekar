// Sample course data
const courses = [
  { title: "IELTS Reading Mastery", instructor: "Anjali Sharma", category: "IELTS" },
  { title: "TOEFL Listening Strategies", instructor: "Rohan Mehta", category: "TOEFL" },
  { title: "GRE Quantitative Reasoning", instructor: "Priya Desai", category: "GRE" },
  { title: "GMAT Verbal Practice", instructor: "Karan Malhotra", category: "GMAT" },
  { title: "PET Speaking Preparation", instructor: "Neha Iyer", category: "PET" },
  { title: "IELTS Writing Task 2 Techniques", instructor: "Vikram Singh", category: "IELTS" },
  { title: "TOEFL Grammar Essentials", instructor: "Sneha Kapoor", category: "TOEFL" },
  { title: "GRE Vocabulary Booster", instructor: "Arjun Reddy", category: "GRE" },
  { title: "GMAT Analytical Writing", instructor: "Meera Nair", category: "GMAT" },
  { title: "PET Listening Comprehension", instructor: "Rahul Bansal", category: "PET" },
  { title: "IELTS Academic Module Overview", instructor: "Divya Joshi", category: "IELTS" },
  { title: "TOEFL Speaking Mock Tests", instructor: "Nikhil Sinha", category: "TOEFL" }
];

  // Inject courses
  function renderCourses(filterText = "") {
    const courseGrid = document.getElementById("allCourseGrid");
    courseGrid.innerHTML = "";
  
    const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(filterText.toLowerCase()) ||
      course.instructor.toLowerCase().includes(filterText.toLowerCase())
    );
  
    filteredCourses.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <h3>${course.title}</h3>
        <p><strong>Instructor:</strong> ${course.instructor}</p>
        <p><strong>Category:</strong> ${course.category}</p>
        <button class="join-btn">Join Course</button>
      `;
      courseGrid.appendChild(card);
    });
  }
  
  // Search functionality
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.createElement("input");
    searchInput.placeholder = " Search courses...";
    searchInput.className = "course-search";
    searchInput.addEventListener("input", () => renderCourses(searchInput.value));
    document.querySelector(".courses").prepend(searchInput);
  
    renderCourses(); // initial load
  });
  