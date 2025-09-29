// Mobile Menu Toggle
document
  .querySelector(".mobile-menu-btn")
  .addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("show");
  });

// Close mobile menu when clicking on a link
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector("nav ul").classList.remove("show");
  });
});

// Simple form validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  } 
  else {
    alert("Please fill in all fields.");
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    280: {
      slidesPerView: 0.5,
    },
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1.5,
    },
  },
});


