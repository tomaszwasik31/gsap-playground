console.log("gsap-hero-txt.js loaded");

// Select the .hero-txt element
const heroText = document.querySelector(".hero-txt");

if (heroText) {
  // Split the text into words and wrap each word in a span
  const words = heroText.textContent
    .split(" ")
    .map((word) => `<span class="word">${word}</span>`);
  heroText.innerHTML = words.join(" ");

  // Animate each word with a fade-in effect
  gsap.fromTo(
    ".hero-txt .word",
    { opacity: 0, y: 20 }, // Start state: invisible and slightly below
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2, // Delay between each word
      ease: "power2.out", // Smooth easing
    }
  );
} else {
  console.warn("No element with class '.hero-txt' found.");
}
