function smoothScrollTo(target) {
  const el = document.querySelector(target);
  if (!el) return;
  window.scrollTo({
    top: el.offsetTop - 80,
    behavior: "smooth",
  });
}

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll");
    smoothScrollTo(target);
  });
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScrollTo(link.getAttribute("href"));
    navLinks.classList.remove("open");
  });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const added = btn.classList.toggle("added");
    btn.textContent = added ? "Added" : "Add to cart";
  });
});

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletterMsg");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value.trim();
  if (!email) return;

  newsletterMsg.textContent = "Thanks! We’ll be in touch soon.";
  newsletterForm.reset();
  setTimeout(() => (newsletterMsg.textContent = ""), 3500);
});

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
