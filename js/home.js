// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  resistanceRatio: 0.7,
  touchAngle: 45,
  followFinger: false,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    waitForTransition: true,
  },
  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 1,
    momentumBounce: true,
    momentumVelocityRatio: 0.5,
  },
});

// Start mobile toggle
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mainNav = document.getElementById("main-nav");

  mobileMenuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });

  // Handle dropdown menus on mobile
  const dropdownItems = document.querySelectorAll(".nav-item.dropdown");

  dropdownItems.forEach((item) => {
    const link = item.querySelector("a");
    const dropdownMenu = item.querySelector(".dropdown-menu");

    // Only attach click event for mobile view
    const handleDropdownClick = function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle("active");
        dropdownMenu.classList.toggle("active");
      }
    };

    link.addEventListener("click", handleDropdownClick);
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !mainNav.contains(e.target) &&
      !mobileMenuToggle.contains(e.target) &&
      mainNav.classList.contains("active")
    ) {
      mainNav.classList.remove("active");

      // Close any open dropdowns
      dropdownItems.forEach((item) => {
        item.classList.remove("active");
        const dropdownMenu = item.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          dropdownMenu.classList.remove("active");
        }
      });
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");

      // Reset dropdowns
      dropdownItems.forEach((item) => {
        item.classList.remove("active");
        const dropdownMenu = item.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          dropdownMenu.classList.remove("active");
        }
      });
    }
  });
});
