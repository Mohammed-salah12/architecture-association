// back-to-top button functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

// When clicked, scroll to top
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

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

// Projects swiper
var swiper = new Swiper(".swiper-projects", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 600,
  resistanceRatio: 0.7,
  touchAngle: 45,

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
  // Responsive breakpoints
  breakpoints: {
    // Mobile (0px - 767px)
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Small tablets (768px - 1023px)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Large tablets/desktops (1024px+)
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // Extra large screens (1200px+)
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// Projects section animation
document.addEventListener("DOMContentLoaded", function () {
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.75
    );
  }

  // Function to handle scroll events
  function handleScroll() {
    const projectsSection = document.querySelector(".projects");
    const projectTitle = document.querySelector(".projects h2");
    const projectCards = document.querySelectorAll(".projects .project-card");

    if (isInViewport(projectsSection)) {
      projectTitle.classList.add("animate");

      projectCards.forEach((card, index) => {
        // Add slight delay between each card
        setTimeout(() => {
          card.classList.add("animate");
        }, index * 100);
      });

      // Remove event listener after animation triggers to improve performance
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Trigger once on load in case elements are already visible
  handleScroll();
});

// Start partner swiper
var swiper = new Swiper(".swiper-partners", {
  loop: true,
  slidesPerView: 8,
  spaceBetween: 30,
  speed: 900,

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
  // Responsive breakpoints
  breakpoints: {
    // Mobile (0px - 767px)
    0: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // Small tablets (768px - 1023px)
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // Large tablets/desktops (1024px+)
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    // Extra large screens (1200px+)
    1200: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});
