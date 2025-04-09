import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper("#testimonials-unique", {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    slidesPerGroup: 1, // Ensure pagination moves one slide at a time
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#nextButton",
      prevEl: "#prevButton",
    },
    breakpoints: {
      768: { slidesPerView: 2, slidesPerGroup: 2 }, // Update here too
      1024: { slidesPerView: 3, slidesPerGroup: 3 }, // And here
    },
  });

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  // Update button states on slide change
  swiper.on("slideChange", () => {
    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd;
  });

  // Initialize button states
  prevButton.disabled = swiper.isBeginning;
  nextButton.disabled = swiper.isEnd;
});