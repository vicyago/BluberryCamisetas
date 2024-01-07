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

// Step 10: Add active class to the page the user is on
document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  var currentUrl = window.location.href;

  // Get all the links in the navigation
  var navLinks = document.querySelectorAll(".menu a");

  // Loop through each link and check if it matches the current URL
  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      // If the link matches, add the "active" class
      link.classList.add("active");
    }
  });
});
