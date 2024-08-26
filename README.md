# Slider Display Project

## 1. Project Overview

A simple JavaScript-based slider component that dynamically displays content, including images and text, with navigation dots, autoplay, and manual navigation options. The project consists of initializing, managing, and rendering multiple slider instances on a webpage.

## 2. File Structure

```plaintext
/root
│
├── index.html # Main HTML file that includes the slider
├── style.css # Stylesheet for the slider and overall page styling
├── appInitializer.js # Initializes the application and sliders
├── sliderRenderer.js # Renders the slider structure and content
├── sliderController.js # Manages the slider logic
├── /imgs # Directory containing the images used in the sliders
```

## 3. Steps to Run The Project

- You can visit it [Live](https://malakjoseph.github.io/Bayt/)

OR

- Clone the project
- Open `index.html`

Note:

> The initApp function is automatically invoked on page load, setting up all sliders defined in the HTML.

## 4. Code Explanation

- `appInitializer.js`:

  - **Purpose**: Initializes the application by setting up all elements with the class `sliders`. This includes rendering content and enabling functionality.
  - **Key Functions**:
    - `initApp()`: Main function to initialize and populate sliders by invoking `populateSliderContent` and `populateSliderLogic` for each slider on the page.

- `sliderRenderer.js`:

  - **Purpose**: Handles the creation and population of the slider's DOM structure, including arrows, slides, and navigation dots.
  - **Key Functions**:
    - `populateSliderContent(slider)`: Handles the creation and population of the slider's DOM structure, including navigation arrows, slides, and navigation dots.

- `sliderController.js`:

  - **Purpose**: Manages slider interactions, including slider navigation and autoplay.
  - **Key Functions**:
    - `populateSliderLogic(slider)`: Initializes slider functionality, including navigation through dots or arrows, autoplay, and managing the active state of the sliders.
    - `initDots()`: Creates and initializes the navigation dots for each slide within the slider.
    - `showSlide(index)`: Displays the slide at the given index.
    - `nextSlide()`: Advances to the next slide.
    - `prevSlide()`: Moves to the previous slide.
    - `startAutoplay()`: Automatically cycles through slides at a set interval.
    - `resetAutoplay()`: Resets the autoplay timer when a manual navigation action occurs.

## 5. How to Extend

To add more sliders, simply extend the HTML structure in `index.html` by adding additional `div` elements with the class `sliders`. Inside each `sliders` container, include multiple `div` elements with the class `slider`. These classes are essential for the JavaScript functions to dynamically populate and manage the sliders effectively.
