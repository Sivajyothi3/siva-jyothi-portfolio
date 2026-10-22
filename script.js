
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const copyEmailButton = document.querySelector("#copyEmailButton");

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.innerHTML = "Email Copied ✓";

      setTimeout(() => {
        copyEmailButton.innerHTML = 'Copy Email <span>⧉</span>';
      }, 2000);
    } catch (error) {
      window.prompt("Copy this email address:", email);
    }
  });
}
