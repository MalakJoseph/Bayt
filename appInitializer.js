const data = [
  [
    {
      content:
        "Detailed content for more in-depth information. This paragraph can be quite long and include more complex details or descriptions.",
      image: "./imgs/man.jpg",
      name: "John Doe",
      role: "Software Engineer",
    },
    {
      content:
        "This is a sample content paragraph for testing purposes. It's meant to give a brief description or message in the carousel.",
      image: "./imgs/woman.jpg",
      name: "Jane Doe",
      role: "Product Manager",
    },
    {
      content:
        "Here's another piece of example content. It serves to provide additional information or context for the user.",
      image: "./imgs/man.jpg",
      name: "Charlie Brown",
      role: "Scrum Master",
    },
    {
      content:
        "Final example content with a brief overview. This serves as a concluding or summary message for the carousel.",
      image: "./imgs/malak.jpg",
      name: "Malak Joseph",
      role: "Frontend Engineer",
    },
  ],
  [
    {
      content: "Content for Carousel 2 Slide 1",
      image: "./imgs/woman.jpg",
      name: "Alice Johnson",
      role: "UX Designer",
    },
    {
      content: "Content for Carousel 2 Slide 2",
      image: "./imgs/man.jpg",
      name: "Bob Smith",
      role: "Backend Engineer",
    },
    {
      content: "Content for Carousel 2 Slide 3",
      image: "./imgs/woman.jpg",
      name: "Clara Lee",
      role: "Data Scientist",
    },
  ],
  [
    {
      content: "Content for Carousel 3 Slide 1",
      image: "./imgs/woman.jpg",
      name: "Alice Johnson",
      role: "UX Designer",
    },
    {
      content: "Content for Carousel 3 Slide 2",
      image: "./imgs/man.jpg",
      name: "Bob Smith",
      role: "Backend Engineer",
    },
    {
      content: "Content for Carousel 3 Slide 3",
      image: "./imgs/woman.jpg",
      name: "Clara Lee",
      role: "Data Scientist",
    },
  ],
];

const initApp = () => {
  const app = document.querySelector(".app");

  data.forEach(() => {
    const carousel = createCarouselStructure();
    app.appendChild(carousel);
  });

  document.querySelectorAll(".carousel").forEach((carousel, index) => {
    populateCarouselContent(carousel, data[index]);
    initCarousel(carousel);
  });
};

document.addEventListener("DOMContentLoaded", initApp);
