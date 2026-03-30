const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    cards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});