function useScroll(target) {
    const targetHeight = target.scrollHeight;
    const windowHeight = window.innerHeight;

    function getScrollProgress() {
        const scrollPosition = window.scrollY;
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const targetBottom = targetTop + targetHeight;

        const startProgress = targetTop - window.scrollY;
        const endProgress = targetBottom - window.scrollY;

        let visibleProgress = ((scrollPosition - startProgress) / (endProgress - startProgress)) / 3.5;

        visibleProgress = Math.max(0, Math.min(visibleProgress, 1));

        const scaledProgress = visibleProgress;
        return scaledProgress;
    }

    return {
        getScrollProgress,
    };
}

function useTransform(inputValue, inputRange, outputRange) {
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;

    const normalizedValue = (inputValue - inputMin) / (inputMax - inputMin);
    return outputMin + normalizedValue * (outputMax - outputMin);
}

const textWrapper = document.getElementById("text-wrapper");
const wordElements = textWrapper.querySelectorAll('[id^="tr_word-"]');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                animateTextReveal();
            }
        });
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px",
    }
);

observer.observe(textWrapper);

function animateTextReveal() {
    const { getScrollProgress } = useScroll(textWrapper);
    const scrollProgress = getScrollProgress();

    if (scrollProgress < 0 || scrollProgress > 1) {
        console.error("Invalid scroll progress:", scrollProgress);
        return;
    }

    console.log({ scrollProgress });
    wordElements.forEach((wordElement, index) => {
        const wordOpacity = useTransform(scrollProgress, [index / wordElements.length, (index + 1) / wordElements.length], [0, 1]);

        wordElement.style.opacity = wordOpacity;
    });
}

window.addEventListener("scroll", animateTextReveal);
animateTextReveal();
