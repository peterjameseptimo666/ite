// animation.js
// Simple animation trigger when elements enter the viewport
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".animate");

  elements.forEach(function(el) {
    let top = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add("in-view");
    }
  });
});

// Run once on page load
window.addEventListener("load", function() {
  let elements = document.querySelectorAll(".animate");

  elements.forEach(function(el) {
    let top = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add("in-view");
    }
  });
});
