'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * Hero section animation
 */

// Function to trigger animation
function triggerAnimation() {
  const heroContent = document.querySelector(".hero-content");
  
  // Ensure the animation class is added
  heroContent.classList.add("show");
}

// Trigger animation on page load
window.addEventListener('load', function() {
  triggerAnimation();
});

// Trigger animation when the "Home" link is clicked
document.getElementById("home-link").addEventListener("click", function(event) {
  event.preventDefault();  // Prevent the default link action (scrolling)

  // Re-trigger the animation by removing and adding the class
  const heroContent = document.querySelector(".hero-content");
  heroContent.classList.remove("show");  // Remove the animation class first
  void heroContent.offsetWidth;  // Trigger reflow to reset the animation
  heroContent.classList.add("show");  // Add the animation class again

  // Optionally, scroll to the home section
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});







/**
 * About section animation
 */

document.addEventListener("DOMContentLoaded", () => {
  // Select elements for the About section
  const aboutLink = document.getElementById("about-link");
  const aboutBanner = document.querySelector(".about-banner");
  const aboutContent = document.querySelector(".about-content");
  const aboutSection = document.getElementById("about");

  // Function to add animation classes
  function triggerAboutAnimation() {
    aboutBanner.classList.add("show");
    aboutContent.classList.add("show");
  }

  // Trigger animation on page load if the About section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerAboutAnimation();
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  observer.observe(aboutSection);

  // Handle "About" link click
  aboutLink.addEventListener("click", (event) => {
    event.preventDefault();

    // Smoothly scroll to the About section
    aboutSection.scrollIntoView({ behavior: "smooth" });

    // Re-trigger animation
    aboutBanner.classList.remove("show");
    aboutContent.classList.remove("show");

    // Force a reflow to reset the animation
    void aboutBanner.offsetWidth;
    void aboutContent.offsetWidth;

    // Re-add the "show" class
    triggerAboutAnimation();
  });
});








/**
 * Portfolio section animation
 */










/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});





/*
* - To Reset The Contact Form Texts
*/ 

// Function to reset the form after submission
function resetFormAfterSubmit() {

  document.querySelector(".contact-form").reset();
}

// Check if the page is loaded due to a form submission (navigated back)
window.addEventListener('pageshow', function(event) {
  if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
      document.querySelector(".contact-form").reset();
  }
});


