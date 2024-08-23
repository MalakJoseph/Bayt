# Carousel Display Project

## 1. Project Overview

A simple JavaScript-based carousel component that dynamically displays content, including images and text, with navigation dots, autoplay, and manual navigation options. The project consists of initializing, managing, and rendering multiple carousel instances on a webpage.

**This project serves as a trial to mimic how React operates under the hood by starting with a minimal HTML structure —just a `<div>` with the class `app`—and then dynamically generating and hydrating the entire carousel content and functionality using JavaScript. The approach illustrates how complex UIs can be built and managed dynamically, similar to React’s component-based rendering**

## 2. File Structure

```plaintext
/root
│
├── index.html # Main HTML file that includes the carousel
├── style.css # Stylesheet for the carousel and overall page styling
├── appInitializer.js # Initializes the application and carousels
├── carouselRenderer.js # Renders the carousel structure and content
├── carouselController.js # Manages the carousel logic
├── /imgs # Directory containing the images used in the carousels
```

## 3. Steps to Run The Project

- You can visit it [Live](https://malakjoseph.github.io/Bayt/)

OR

- Clone the project
- Open `index.html`

Note:

> The initApp function is automatically invoked on page load, setting up all carousels defined in the data array.

## 4. Code Explanation

- `appInitializer.js`:

  - **Purpose**: Initializes the application by creating and populating carousel structures based on the `data` array.
  - **Key Functions**:
    - `initApp()`: Main function to initialize and populate carousels.
    - `createCarouselStructure()`: Creates the HTML structure for each carousel.
    - `populateCarouselContent(carousel, data)`: Populates a carousel with content from the `data` array.

- `carouselRenderer.js`:

  - **Purpose**: Handles the creation and population of the carousel's DOM structure, including arrows, slides, and navigation dots.
  - **Key Functions**:
    - `createCarouselStructure()`: Creates the main HTML structure for a carousel, including navigation arrows, slide container, and navigation dots.
    - `populateCarouselContent(carouselElement, data)`: Populates the given `carouselElement` with slides based on the `data` array.
    - `createSlide({ content, image, name, role })`: Creates a single slide element with content, image, name, and role.

- `carouselController.js`:
  - **Purpose**: Manages carousel interactions, including slide navigation and autoplay.
  - **Key Functions**:
    - `initCarousel(carouselElement)`: Initializes carousel functionality, including dots and slide navigation.
    - `showSlide(index)`: Displays the slide at the given index.
    - `nextSlide()`: Advances to the next slide.
    - `prevSlide()`: Moves to the previous slide.
    - `autoplay()`: Automatically cycles through slides at a set interval.

## 5. How to Extend

To add more carousels, simply extend the data array in `appInitializer.js` with additional arrays, each representing a new carousel.
