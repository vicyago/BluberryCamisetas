// Initialize variables to keep track of the current slide and total number of slides
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

// Select the slider and slider container elements
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");

// Set an interval for automatic sliding, adjust the interval duration as needed (e.g., 5000ms for 5 seconds)
let slideInterval = setInterval(nextSlide, 5000);

// Function to show a specific slide based on its index
function showSlide(index) {
  // Calculate the translate value for the slide based on its index
  const translateValue = -index * 100 + "%";

  // Apply a smooth transition effect to the slider element
  slider.style.transition = "transform 0.5s ease-in-out";

  // Move the slider to the specified slide using the transform property
  slider.style.transform = "translateX(" + translateValue + ")";
}

// Function to transition to the next slide
function nextSlide() {
  // Update the current slide index, ensuring it wraps around to the first slide if necessary
  currentSlide = (currentSlide + 1) % totalSlides;

  // Show the next slide
  showSlide(currentSlide);
}

// Function to transition to the previous slide
function prevSlide() {
  // Update the current slide index, ensuring it wraps around to the last slide if necessary
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

  // Show the previous slide
  showSlide(currentSlide);
}

// Reset the transition property after each slide transition to prevent unintended acceleration
slider.addEventListener("transitionend", () => {
  slider.style.transition = "none";
});

// Optional: Pause automatic sliding when the mouse enters the slider container
sliderContainer.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

// Optional: Resume automatic sliding when the mouse leaves the slider container
sliderContainer.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});
