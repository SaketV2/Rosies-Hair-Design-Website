import { db, collection, addDoc, serverTimestamp }
  from "./firebase-config.js";

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("nav--scrolled", window.scrollY > 40);
});

const burger = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__links");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navMenu.classList.toggle("open");
});
navMenu.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    navMenu.classList.remove("open");
  })
);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.15 }
);
revealEls.forEach(el => observer.observe(el));

const form    = document.getElementById("contact-form");
const btn     = document.getElementById("form-btn");
const status  = document.getElementById("form-status");

form.addEventListener("submit", async e => {
  e.preventDefault();

  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const phone   = document.getElementById("phone").value.trim();
  const service = document.getElementById("service")?.value.trim() ?? "";
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) return;

  btn.disabled    = true;
  btn.textContent = "Sending…";
  status.className = "";
  status.textContent = "";

  try {
    await addDoc(collection(db, "enquiries"), {
      name,
      email,
      phone,
      service,
      message,
      createdAt: serverTimestamp()
    });

    status.textContent = "✓ Message received — we'll be in touch soon!";
    status.className   = "form__status form__status--success";
    form.reset();
  } catch (err) {
    console.error("Firestore error:", err);
    status.textContent = "Something went wrong. Please try again or email us directly.";
    status.className   = "form__status form__status--error";
  } finally {
    btn.disabled    = false;
    btn.textContent = "Send Message";
  }
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}, { passive: true });
