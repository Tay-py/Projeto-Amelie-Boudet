const carrossel = document.querySelector(".carrossel");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

btnNext.addEventListener("click", () => {
  carrossel.scrollBy({ left: 250, behavior: "smooth" });
});

btnPrev.addEventListener("click", () => {
  carrossel.scrollBy({ left: -250, behavior: "smooth" });
});
