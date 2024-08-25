const populateSliderContent = (slider) => {
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

  const sliderContent = document.createElement("div");
  sliderContent.className = "slider-content";

  let sliderContentClone = slider.innerHTML;
  sliderContent.innerHTML = sliderContentClone;
  slider.innerHTML = "";

  const navDots = document.createElement("div");
  navDots.className = "nav-dots";

  slider.appendChild(leftArrow);
  slider.appendChild(sliderContent);
  slider.appendChild(rightArrow);
  slider.appendChild(navDots);
};

