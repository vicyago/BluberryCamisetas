// Function to toggle the display of the modals
function toggleModal(productName) {
    var modal = document.getElementById(productName + "-modal");
    modal.style.display = modal.style.display === "none" || modal.style.display === "" ? "block" : "none";
}

