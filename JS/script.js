document.addEventListener("DOMContentLoaded", () => {
  
  const carrosseis = document.querySelectorAll(".carrossel-container");

  carrosseis.forEach(container => {
    const carrossel = container.querySelector(".carrossel");
    const prevBtn = container.querySelector(".prev");
    const nextBtn = container.querySelector(".next");

    function slideAmount() {
      const img = carrossel.querySelector("img");
      return img.offsetWidth + 20;
    }

    prevBtn.addEventListener("click", () => {
      carrossel.scrollLeft -= slideAmount();
    });

    nextBtn.addEventListener("click", () => {
      carrossel.scrollLeft += slideAmount();
    });

    setInterval(() => {
      if (carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth) {
        carrossel.scrollLeft = 0;
      } else {
        carrossel.scrollLeft += slideAmount();
      }
    }, 3000);
  });

});
