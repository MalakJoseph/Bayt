const createCarouselStructure = () => {
  const carousel = document.createElement("div");
  carousel.className = "carousel";

  const leftArrow = document.createElement("button");
  leftArrow.className = "arrow left-arrow";
  leftArrow.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="opacity: 0.2"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  `;

  const rightArrow = document.createElement("button");
  rightArrow.className = "arrow right-arrow";
  rightArrow.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="opacity: 0.2"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  `;

  const carouselContent = document.createElement("div");
  carouselContent.className = "carousel-content";

  const navDots = document.createElement("div");
  navDots.className = "nav-dots";

  carousel.appendChild(leftArrow);
  carousel.appendChild(carouselContent);
  carousel.appendChild(rightArrow);
  carousel.appendChild(navDots);

  return carousel;
};

const populateCarouselContent = (carouselElement, data) => {
  const carouselContent = carouselElement.querySelector(".carousel-content");
  const slides = data.map(createSlide);

  slides.forEach((slide) => carouselContent.appendChild(slide));
};

const createSlide = ({ content, image, name, role }) => {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = `
            <p class="content" title="${content}">${content}</p>
            <img src="${image}" alt="${name}" class="image">
            <h3 class="name">${name}</h3>
            <p class="role">${role}</p>
            <button class="view-cv">View CV Sample</button>
        `;
  return slide;
};
