const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll(".about_tab_panel");

function switchTab(oldTab, newTab) {
    oldTab.setAttribute("aria-selected", "false");
    oldTab.setAttribute("tabindex", "-1");
    newTab.setAttribute("aria-selected", "true");
    newTab.setAttribute("tabindex", "0");
    newTab.focus();

    tabPanels.forEach((panel) => (panel.hidden = true));
    const newPanelId = newTab.getAttribute("aria-controls");
    document.getElementById(newPanelId).hidden = false;

    const hash = newTab.dataset.hash;
    if (hash) {
        window.history.pushState(null, "", `#${hash}`);
    }
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const currentTab = document.querySelector('[role="tab"][aria-selected="true"]');
        if (tab !== currentTab) {
            switchTab(currentTab, tab);
        }
    });

    tab.addEventListener("keydown", (e) => {
        let newIndex = null;
        const currentIndex = Array.prototype.indexOf.call(tabs, e.currentTarget);
        const key = e.key;

        if (key === "ArrowRight") newIndex = (currentIndex + 1) % tabs.length;
        else if (key === "ArrowLeft") newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        else if (key === "Home") newIndex = 0;
        else if (key === "End") newIndex = tabs.length - 1;
        else if (key === "ArrowDown") {
            document.getElementById(tab.getAttribute("aria-controls"))?.focus();
        }

        if (newIndex !== null) {
            e.preventDefault();
            switchTab(tabs[currentIndex], tabs[newIndex]);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const tabToActivate = Array.from(tabs).find(tab => tab.dataset.hash === hash);
        if (tabToActivate) {
            const currentTab = document.querySelector('[role="tab"][aria-selected="true"]');
            switchTab(currentTab, tabToActivate);
        }
    }
});
