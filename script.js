// Toggle Course Dropdown
function toggleCourses() {
  const list = document.getElementById("courseList");
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}

// Search Function
document.querySelector(".search-box button").addEventListener("click", function () {
  const input = document.querySelector(".search-box input").value.toLowerCase();
  const courses = document.querySelectorAll("#courseList li");
  const list = document.getElementById("courseList");

  let found = false;

  courses.forEach(function (course) {
    const text = course.textContent.toLowerCase();
    if (text.includes(input)) {
      course.style.display = "block";
      found = true;
    } else {
      course.style.display = "none";
    }
  });

  if (found) {
    list.style.display = "block";
  } else {
    list.style.display = "none";
    alert("No Course Found!");
  }
});