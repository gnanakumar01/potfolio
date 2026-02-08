// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* ===============================
   ACTIVE NAV LINK ON SCROLL
================================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


/* ===============================
   TYPING EFFECT FOR TITLE
================================= */
const textArray = ["Frontend Developer", "React Developer", "Web Designer"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".content #typing:last-of-type");

function typeEffect() {
    if (!typingElement) return;

    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent =
            textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);


/* ===============================
   CONTACT FORM VALIDATION
================================= */
const formButton = document.querySelector(".contact_right button");
const inputs = document.querySelectorAll(".contact_right input, .contact_right textarea");

if (formButton) {
    formButton.addEventListener("click", (e) => {
        e.preventDefault();

        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                valid = false;
            } else {
                input.style.border = "none";
            }
        });

        if (valid) {
            alert("✅ Message sent successfully!");
            inputs.forEach(input => input.value = "");
        } else {
            alert("⚠️ Please fill all required fields.");
        }
    });
}


/* ===============================
   SCROLL REVEAL ANIMATION
================================= */
const revealElements = document.querySelectorAll(
    ".about_me, .skills-section, .project-card, .contact"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

// initial styles
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);


/* ===============================
   BUTTON RIPPLE EFFECT
================================= */
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.offsetX - diameter / 2}px`;
        circle.style.top = `${e.offsetY - diameter / 2}px`;
        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");
        if (ripple) ripple.remove();

        this.appendChild(circle);
    });
});
