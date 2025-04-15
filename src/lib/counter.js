function animateCounter(id, target, duration) {
    let start = 0;
    const element = document.getElementById(id);
    if (!element) return;
    const increment = target / duration;
    let current = start;

    function updateCounter() {
        current += increment;
        if (current >= target) {
            element.textContent = target.toString();
        } else {
            element.textContent = Math.floor(current).toString();
            requestAnimationFrame(updateCounter);
        }
    }
    updateCounter();
}

function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCounter("years", 15, 20);
            animateCounter("happyClients", 150, 20);
            animateCounter("projects", 200, 20);
            animateCounter("integrations", 100, 20);
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
});

const counterSection = document.getElementById("counterSection");
if (counterSection) {
    observer.observe(counterSection);
}