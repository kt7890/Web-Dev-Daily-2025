// Hamburger
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navLinks").classList.toggle("active");
};

// Scroll button
document.getElementById("projectBtn").onclick = () => {
  document.getElementById("projects").scrollIntoView({behavior:"smooth"});
};

// Scroll reveal
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add("show");
  });
});
sections.forEach(sec => observer.observe(sec));

// Filter
document.querySelectorAll(".filters button").forEach(btn=>{
  btn.onclick=()=>{
    const f=btn.dataset.filter;
    document.querySelectorAll(".card").forEach(c=>{
      c.classList.toggle("hide", f!=="all" && c.dataset.category!==f);
    });
  };
});

// Form validation
document.getElementById("form").onsubmit = (e)=>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;

  if(!name || !email || !msg){
    document.getElementById("error").innerText = "Fill all fields";
  } else {
    document.getElementById("error").innerText = "Submitted!";
  }
};