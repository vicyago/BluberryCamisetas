// Function to toggle the display of the modals, overlay, and footer
function toggleModal(productName) {
  var modal = document.getElementById(productName + "-modal");
  var closeButton = modal.querySelector(".close");
  var overlay = document.getElementById("overlay");
  var footer = document.querySelector("footer");

  // Add event listener to the close button
  closeButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the modal background
    modal.style.display = "none";
    overlay.style.display = "none"; // Hide the overlay when modal is closed
    footer.style.display = "block"; // Show the footer when modal is closed
  });

  // Add event listener to the modal background to prevent closing when clicking outside the modal
  modal.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Toggle the modal display, overlay, and hide/show the footer
  modal.style.display = "block";
  overlay.style.display = "block"; // Show the overlay when modal is opened
  footer.style.display = "none"; // Hide the footer when modal is opened
}