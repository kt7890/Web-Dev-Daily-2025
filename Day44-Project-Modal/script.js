const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.getElementById("closeBtn");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.innerText = card.dataset.title;
    modalDesc.innerText = card.dataset.desc;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});