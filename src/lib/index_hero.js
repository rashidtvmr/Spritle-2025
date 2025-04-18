
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

Swiper.use([Autoplay, Pagination]);

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".heroswiper", {
        centeredSlides: true,
        grabCursor: false,
        // autoplay: {
        //     delay: 15000,
        //     disableOnInteraction: !false,
        // },
        allowTouchMove: true,
        loop: true,
        breakpoints: {
            320: { slidesPerView: 1.2, spaceBetween: 20 },
            640: { slidesPerView: 1.3, spaceBetween: 20 },
            768: { slidesPerView: 1.3, spaceBetween: 30 },
            1024: { slidesPerView: 1.3, spaceBetween: 50 },
            1280: { slidesPerView: 1.3, spaceBetween: 100 },
            1500: { slidesPerView: 1.5, spaceBetween: 100 },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // bulletActiveClass: "!opacity-100,!bg-button",
            // bulletClass: "swiper-pagination-bullet,!bg-button",
        },
    });

    function updateSlideStyles() {
        const slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide, i) => {
            const img = slide.querySelector(".slide-image");
            const text = slide.querySelector(".slide-text");
            if (!img || !text) return;
            if (i === swiper.activeIndex) {
                img.classList.remove("blur-[2px]", "filter");
                text.classList.remove("opacity-0");
                img.classList.remove("scale-y-[0.7]");
            } else {
                img.classList.add("blur-[2px]", "filter");
                text.classList.add("opacity-0");
                img.classList.add("scale-y-[0.7]");
            }
        });
    }

    updateSlideStyles();
    swiper.on("slideChange", updateSlideStyles);
});

