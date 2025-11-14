// Carrossel
      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".dot");
      let index = 0;

      function showSlide(n) {
        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));
        slides[n].classList.add("active");
        dots[n].classList.add("active");
      }

      document.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
      });

      document.querySelector(".prev").addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      });

      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          index = i;
          showSlide(index);
        });
      });

      setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
      }, 1000);