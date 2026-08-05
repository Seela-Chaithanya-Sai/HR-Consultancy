// ================================
// HAMBURGER MENU
// ================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ================================
// CONTACT FORM POPUP
// ================================

const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    popup.classList.add("show");

    contactForm.reset();

});

// Close popup with OK button

closePopup.addEventListener("click", function () {

    popup.classList.remove("show");

});

// Close popup by clicking outside

window.addEventListener("click", function (e) {

    if (e.target === popup) {

        popup.classList.remove("show");

    }

});

// Close popup using Escape key

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        popup.classList.remove("show");

    }

});

// ================================
// INPUT FOCUS EFFECT
// ================================

const inputs = document.querySelectorAll(
    ".contact-right input, .contact-right textarea, .contact-right select"
);

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transition = ".3s";

    });

});

// ================================
// SCROLL ANIMATION
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".contact-card, .contact-right, .map-section").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s";

    observer.observe(item);

});