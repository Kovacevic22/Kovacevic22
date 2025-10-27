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
