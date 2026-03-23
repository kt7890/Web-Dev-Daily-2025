const links = document.querySelectorAll(".nav-link");
const projectBtn = document.getElementById("projectBtn");
const projectsSection = document.getElementById("projects");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

projectBtn.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});