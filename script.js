// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Add to cart functionality
        if (button.classList.contains("add-to-cart")) {
          console.log("Add to cart button clicked");
        }
        // CTA button functionality
        else if (button.classList.contains("cta-button")) {
          console.log("CTA button clicked");
        }
      });
    });
  });