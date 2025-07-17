// Set current date
const dateSpan = document.getElementById("date");
if (dateSpan) dateSpan.innerText = new Date().toDateString();

// Only run this on dashboard page
const grid = document.getElementById("courseGrid");
if (grid) {
  const courses = [
    { title: "SAT ", instructor: "Dr. Smith", progress: 80 },
    { title: "GMAT ", instructor: "Ms. Patil", progress: 55 },
    { title: "GRE", instructor: "Dr. Deshpande", progress: 70 },
    { title: "TOEFL", instructor: "Mr. Rane", progress: 40 },
    { title: "IELTS", instructor: "Ms. Bhosale", progress: 90 },
    { title: "PTE", instructor: "Mrs. Khan", progress: 65 },
  ];
  courses.forEach(course => {
    const div = document.createElement("div");
    div.className = "course-card";
    div.innerHTML = `
      <h3>${course.title}</h3>
      <p>Instructor: ${course.instructor}</p>
      <div class="progress-bar">
        <div class="progress" style="width: ${course.progress}%"></div>
      </div>
      <button onclick="alert('Going to ${course.title}')">Go to Course</button>
    `;
    grid.appendChild(div);
  });
}

const todoList = document.getElementById("todo-list");
if (todoList) {
  const todos = [
    { task: "Submit SAT assignment", due: "2025-07-18" },
    { task: "Read GMAT chapter", due: "2025-07-19" },
    { task: "Prepare for GRE quiz", due: "2025-07-20" },
  ];
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${todo.task} (Due: ${todo.due})</span>
      <input type="checkbox" onchange="this.parentElement.style.textDecoration = this.checked ? 'line-through' : 'none';">
    `;
    todoList.appendChild(li);
  });
}

// Sidebar toggle for mobile
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("mobileOverlay");
const closeSidebarBtn = document.getElementById("closeSidebar");

if (hamburger && sidebar) {
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    if (overlay) overlay.classList.toggle("active");
    // Show close button only on mobile when sidebar is open
    if (closeSidebarBtn && window.innerWidth <= 600) {
      closeSidebarBtn.style.display = sidebar.classList.contains("open") ? "block" : "none";
    }
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    if (closeSidebarBtn) closeSidebarBtn.style.display = "none";
  });
}

if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
    closeSidebarBtn.style.display = "none";
  });
}
