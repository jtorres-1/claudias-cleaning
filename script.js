// Smooth scroll for Book Now button
const bookNowBtn = document.getElementById("bookNowBtn");
const contactSection = document.getElementById("contact");

if (bookNowBtn) {
  bookNowBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Smooth scroll for all nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
