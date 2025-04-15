
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

Swiper.use([Autoplay]);

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".heroswiper", {
        centeredSlides: true,
        // effect: "coverflow",
        // coverflowEffect: {
        //     rotate: 150,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },
        grabCursor: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        loop: true,
        breakpoints: {
            320: { slidesPerView: 1.1, spaceBetween: 10 },
            640: { slidesPerView: 1.3, spaceBetween: 10 },
            768: { slidesPerView: 1.3, spaceBetween: 30 },
            1024: { slidesPerView: 1.3, spaceBetween: 50 },
            1280: { slidesPerView: 1.3, spaceBetween: 100 },
            1500: { slidesPerView: 1.3, spaceBetween: 100 },
        },
        pagination: {
            el: ".swiper-pagination",
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
                img.classList.remove("scale-y-[0.8]");
            } else {
                img.classList.add("blur-[2px]", "filter");
                text.classList.add("opacity-0");
                img.classList.add("scale-y-[0.8]");
            }
        });
    }

    updateSlideStyles();
    swiper.on("slideChange", updateSlideStyles);
});

