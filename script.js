
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Replace this with your real email address.
const email = "kanhapadhi2429@gmail.com";
const emailLink = document.getElementById("emailLink");
const copyEmail = document.getElementById("copyEmail");

emailLink.href = `mailto:${email}`;

copyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyEmail.textContent = "Email Copied ✓";
  } catch {
    copyEmail.textContent = email;
  }

  setTimeout(() => {
    copyEmail.textContent = "Copy Email";
  }, 2500);
});
