// JavaScript to change the background color of the navbar on scroll
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });

  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });