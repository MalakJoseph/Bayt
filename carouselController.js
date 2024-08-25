const initCarousel = (carouselElement) => {
  const slides = carouselElement.querySelectorAll(".slide");
  const dotsContainer = carouselElement.querySelector(".nav-dots");
  let currentIndex = 0;
  let previousIndex = 0;

  const initDots = () => {
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = `dot ${index === 0 ? "active" : ""}`;
      dot.addEventListener("click", () => showSlide(index));
      dotsContainer.appendChild(dot);
    });
  };

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "prev", "next");

      if (i === previousIndex) {
        const isPrev = index > previousIndex || (index === 0 && previousIndex === slides.length - 1);
        slide.classList.add(isPrev ? "prev" : "next");
      }

      if (i === index) {
        slide.classList.add("active");
      }

      dotsContainer.children[i].classList.toggle("active", i === index);
    });

    previousIndex = currentIndex;
    currentIndex = index;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  const startAutoplay = () => {
    setInterval(() => nextSlide(), 2500);
  };

  carouselElement
    .querySelector(".left-arrow")
    .addEventListener("click", prevSlide);
  carouselElement
    .querySelector(".right-arrow")
    .addEventListener("click", nextSlide);

  initDots();
  showSlide(currentIndex);
  startAutoplay();
};
