
// ================= script.js =================
const text = ["Full Stack Developer", "React & Django Expert", "UI Lover"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent = current.slice(0, ++j);
    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.slice(0, --j);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
