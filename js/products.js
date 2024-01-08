document.addEventListener("DOMContentLoaded", function () {
    // Get all h2 elements with class 'vert'
    var h2Elements = document.querySelectorAll('h2.vert');

    // Iterate through each h2 element
    h2Elements.forEach(function (h2Element) {
        // Get the text content of the h2 element
        var originalText = h2Element.textContent;

        // Split the text content into individual letters
        var letters = originalText.split("");

        // Join the letters with each letter on a new line
        var formattedText = letters.join("<br/>");

        // Set the formatted text as the HTML content of the h2 element
        h2Element.innerHTML = formattedText;
    });
});