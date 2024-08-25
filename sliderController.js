const populateSliderLogic = (slider) => {
  const innerSliders = slider.querySelectorAll(".slider");
  const dotsContainer = slider.querySelector(".nav-dots");
  let currentIndex = 0;
  let previousIndex = 0;
  let autoPlayTimerId = null;

  const initDots = () => {
    innerSliders.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = `dot ${index === 0 ? "active" : ""}`;
      dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  };

  const showSlide = (index) => {
    innerSliders.forEach((slide, i) => {
      slide.classList.remove("active", "prev", "next");

      if (i === previousIndex) {
        const isPrev =
          index > previousIndex ||
          (index === 0 && previousIndex === innerSliders.length - 1);
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
    currentIndex = (currentIndex + 1) % innerSliders.length;
    showSlide(currentIndex);
    resetAutoplay();
  };

  const prevSlide = () => {
    currentIndex =
      (currentIndex - 1 + innerSliders.length) % innerSliders.length;
    showSlide(currentIndex);
    resetAutoplay();
  };

  const startAutoplay = () => {
    autoPlayTimerId = setInterval(() => nextSlide(), 2500);
  };

  const resetAutoplay = () => {
    clearInterval(autoPlayTimerId);
    startAutoplay();
  };

  slider.querySelector(".left-arrow").addEventListener("click", prevSlide);
  slider.querySelector(".right-arrow").addEventListener("click", nextSlide);

  initDots();
  showSlide(currentIndex);
  startAutoplay();
};
