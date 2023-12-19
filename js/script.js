// Step 1: Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Step 2: Get references to the header and mobile menu elements
  const header = document.querySelector("header");
  const mobileMenu = document.getElementById("mobile-menu");

  // Step 3: Add a click event listener to the header
  header.addEventListener("click", () => {
    // Step 4: Toggle the "hidden" class on the header and mobile menu
    header.classList.toggle("hidden");
    mobileMenu.classList.toggle("mobile-menu");

    // Step 5: Toggle the visibility of the header links
    const headerLinks = document.querySelectorAll(".header-link");
    headerLinks.forEach((link) => link.classList.toggle("hidden"));
  });

  // Step 6: Get a reference to the menu text element
  const menuText = document.getElementById("menu-text");

  // Step 7: Check the screen width and update the menu text accordingly
  const checkScreenWidth = () => {
    menuText.textContent = window.innerWidth <= 768 ? "Menu" : "";
  };

  // Step 8: Initial check when the page loads
  checkScreenWidth();

  // Step 9: Listen for window resize events and update the menu text
  window.addEventListener("resize", checkScreenWidth);
});

// Carousel events
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  let currentIndex = 0;

  // Function to update the transform property of the track
  const updateTrack = () => {
    const translateValue = -currentIndex * 100 + '%';
    track.style.transform = 'translateX(' + translateValue + ')';
  };

  // Function to handle the previous button click
  const handlePrevButtonClick = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateTrack();
  };

  // Function to handle the next button click
  const handleNextButtonClick = () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateTrack();
  };

  // Event listeners for the previous and next buttons
  prevButton.addEventListener('click', handlePrevButtonClick);
  nextButton.addEventListener('click', handleNextButtonClick);
});

// Function to remove elements with the specified style on smaller screens
function removeElementsOnSmallScreens() {
  var elementsToRemove = document.querySelectorAll('p[style="color: white;"]');
  
  // Check if elements exist and the screen width is smaller than 768 pixels
  if (window.innerWidth <= 768) {
    elementsToRemove.forEach(function(element) {
      element.remove(); // Remove each matching element
    });
  }
}

// Call the function when the page loads and on window resize
window.addEventListener('load', removeElementsOnSmallScreens);
window.addEventListener('resize', removeElementsOnSmallScreens);