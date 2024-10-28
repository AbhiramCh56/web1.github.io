// src/scrollAnimation.js

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const logo = document.querySelector(".App::before");

  if (logo) {
    // Adjust rotation based on scroll position
    const rotation = scrollPosition / 2; // Adjust this value to control rotation speed
    logo.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
  }
};

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial call to ensure correct state
handleScroll();
