// Function to toggle the display of the modals
function toggleModal(productName) {
    var modal = document.getElementById(productName + "-modal");
    var closeButton = modal.querySelector('.close');
  
    // Add event listener to the close button
    closeButton.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click event from propagating to the modal background
      modal.style.display = 'none';
    });
  
    // Add event listener to the modal background to prevent closing when clicking outside the modal
    modal.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  
    // Toggle the modal display only if the click target is the close button
    modal.style.display = 'block';
  }