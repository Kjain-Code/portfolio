// Reveal Animation on Scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 100;

  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
// Trigger once on load
revealOnScroll();


// Featured Work Slider Logic
const slider = document.getElementById("autoSlider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let scrollAmount = 0;
const cardWidth = 400; // Approximate width of card + gap

if (slider && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  });

  // Drag to scroll functionality
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("cursor-grabbing");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("cursor-grabbing");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("cursor-grabbing");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}
// Theme Toggle Logic
const themeToggle = document.getElementById("themeToggle");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

const applyTheme = (theme) => {
  if (theme === "light") {
    document.documentElement.classList.add("light-mode");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("light-mode");
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
  localStorage.setItem("theme", theme);
};

// Check for saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("light-mode");
    applyTheme(isLight ? "dark" : "light");
  });
}
// Mouse Follow Effect
const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
    cursorGlow.style.opacity = "0.6"; /* Increased base opacity */
  });

  window.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
}
