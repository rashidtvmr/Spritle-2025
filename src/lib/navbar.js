
const mobileBtn = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileBtn.classList.toggle("open");
});
const setupDesktopDropdown = (toggleId, menuId, arrowId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    const arrow = arrowId ? document.getElementById(arrowId) : null;

    if (!toggle || !menu) return;

    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !expanded);
        menu.classList.toggle("hidden");
        // if (arrow) arrow.classList.toggle("rotate-180");
    });

    toggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle.click();
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const firstLink = menu.querySelector("a");
            if (firstLink) firstLink.focus();
        }
    });

    menu.querySelectorAll("a").forEach((link, index, links) => {
        link.addEventListener("keydown", (e) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                if (index < links.length - 1) links[index + 1].focus();
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                if (index > 0) links[index - 1].focus();
                else toggle.focus();
            } else if (e.key === "Escape") {
                toggle.setAttribute("aria-expanded", false);
                menu.classList.add("hidden");
                toggle.focus();
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            toggle.setAttribute("aria-expanded", false);
            menu.classList.add("hidden");
        }
    });
};

setupDesktopDropdown("servicesToggle", "servicesMenu", "servicesArrow");
setupDesktopDropdown(
    "industriesDropdownToggleDesktop",
    "industriesDropdownDesktop",
    "industriesArrowDesktop"
);
setupDesktopDropdown(
    "knowledgeDropdownToggleDesktop",
    "knowledgeDropdownDesktop",
    "knowledgeArrowDesktop"
);

