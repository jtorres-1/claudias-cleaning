// Smooth scroll for Book Now
const bookNowBtn = document.getElementById("bookNowBtn");
const contactSection = document.getElementById("contact");

if (bookNowBtn) {
  bookNowBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
}
