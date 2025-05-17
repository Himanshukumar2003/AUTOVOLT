document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
      },
    },
  });

  // Add hover effect to review cards
  const reviewCards = document.querySelectorAll(".review-card");
  reviewCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
      this.style.transition = "all 0.3s ease";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.05)";
      this.style.transition = "all 0.3s ease";
    });
  });

  // View All Reviews button functionality
  const viewAllBtn = document.querySelector(".view-all-btn");
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", function () {
      // You can replace this with actual functionality
      alert("View all reviews functionality will be implemented here");
    });
  }
});

// panels

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove("active"));
}

const swiper = new Swiper(".applications", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: false,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
