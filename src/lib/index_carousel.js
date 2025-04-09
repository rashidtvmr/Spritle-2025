import { navigate } from "astro:transitions/client"
const carousel = document.getElementById("tb-carousel");
const carouselStyles = window.getComputedStyle(carousel);
const carouselCards = document.querySelectorAll(".tb-carousel-card");
const carouselCard = document.querySelector(".tb-carousel-card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function toggleArrowButtons() {
    if (carousel.scrollLeft <= 0) {
        prevBtn.classList.add("btn-disbaled");
    } else {
        prevBtn.classList.remove("btn-disbaled");
    }
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        nextBtn.classList.add("btn-disbaled");
    } else {
        nextBtn.classList.remove("btn-disbaled");
    }
}

function handleScroll(direction) {
    if (!carouselCard) return;
    const cardWidth = carouselCard.offsetWidth;
    const gap = parseInt(carouselStyles.gap, 10) || 0;
    const scrollAmount = (cardWidth + gap) * direction;
    carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
    });
    setTimeout(toggleArrowButtons, 300);
}

const handleCardClick = (e) => {
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".tb-carousel-card");
    if (card) {
        const href = card.dataset.href;
        if (href) {
            navigate(href);
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    toggleArrowButtons();
    nextBtn.addEventListener("click", () => handleScroll(1));
    prevBtn.addEventListener("click", () => handleScroll(-1));
    carousel.addEventListener("scroll", toggleArrowButtons);
    carousel.addEventListener("click", handleCardClick);
    carousel.addEventListener("keydown", handleCardClick);
});
