document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", function () {
    document
      .querySelectorAll(".service-card")
      .forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
  });
});
