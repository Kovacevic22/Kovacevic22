// HEADER HEIGHT
// The header is fixed, so its height has to be published to CSS as --header-h.
// It changes shape across breakpoints (stacked contact rows, hidden social bar),
// so measure it instead of hardcoding a padding per breakpoint.
(function () {
  const header = document.querySelector(".header-section");
  if (!header) return;

  function syncHeaderHeight() {
    document.documentElement.style.setProperty(
      "--header-h",
      header.offsetHeight + "px"
    );
  }

  syncHeaderHeight();
  window.addEventListener("load", syncHeaderHeight);
  window.addEventListener("orientationchange", syncHeaderHeight);

  if (window.ResizeObserver) {
    new ResizeObserver(syncHeaderHeight).observe(header);
  } else {
    window.addEventListener("resize", syncHeaderHeight);
  }
})();

// AMBIENT BACKGROUND MOVEMENT
(function () {
  const particlesContainer = document.getElementById("particles");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (particlesContainer && !prefersReducedMotion) {
    const count = window.innerWidth < 800 ? 12 : 24;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      const size = (Math.random() * 3 + 2).toFixed(1) + "px";
      const left = Math.random() * 100 + "%";
      const duration = (Math.random() * 12 + 14).toFixed(1) + "s";
      const delay = (Math.random() * -20).toFixed(1) + "s";
      const drift = (Math.random() * 120 - 60).toFixed(0) + "px";
      particle.style.setProperty("--size", size);
      particle.style.setProperty("--left", left);
      particle.style.setProperty("--duration", duration);
      particle.style.setProperty("--delay", delay);
      particle.style.setProperty("--drift", drift);
      particlesContainer.appendChild(particle);
    }
  }
})();

// THEME PICKER
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const menu = document.getElementById("themeMenu");
  const options = document.querySelectorAll(".theme-option");
  const savedTheme = localStorage.getItem("portfolio-theme") || "cyan";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    options.forEach((opt) => {
      opt.classList.toggle("active", opt.dataset.theme === theme);
    });
  }

  applyTheme(savedTheme);

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });

  options.forEach((opt) => {
    opt.addEventListener("click", function () {
      applyTheme(opt.dataset.theme);
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && e.target !== toggle) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-section");
  const scrollToTopBtn = document.getElementById("scrollToTop");

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".header-nav");
const body = document.body;

const overlay = document.createElement("div");
overlay.className = "menu-overlay";
body.appendChild(overlay);

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});
overlay.addEventListener("click", function () {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "";
});
document.querySelectorAll(".header-nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "";
  });
});
//DOWNLOAD CV

document.getElementById("downloadBtn").addEventListener("click", function () {
    Swal.fire({
      title: "Download CV?",
      text: "Are you sure you want to download the CV?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, download it",
      cancelButtonText: "Cancel",
      background: "#1a1a1a",
      color: "#fff",
      confirmButtonColor: "#194bfd",
      cancelButtonColor: "#555"
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = "./CV.pdf"; // your file path
        link.download = "Vukasin_Kovacevic_CV.pdf";
        link.click();
      }
    });
});
