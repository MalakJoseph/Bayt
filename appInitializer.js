const initApp = () => {
    document.querySelectorAll(".sliders").forEach((slider) => {
      populateSliderContent(slider);
      populateSliderLogic(slider);
    });
  };
  
  document.addEventListener("DOMContentLoaded", initApp);
  