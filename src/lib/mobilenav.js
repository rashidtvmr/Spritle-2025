const dropdownToggles = [
    {
        button: "servicesDropdownToggleMobile",
        dropdown: "servicesDropdownMobile",
        arrow: "servicesArrowMobile",
    },
    {
        button: "industriesDropdownToggleMobile",
        dropdown: "industriesDropdownMobile",
        arrow: "industriesArrowMobile",
    },
    {
        button: "knowledgeDropdownToggleMobile",
        dropdown: "knowledgeDropdownMobile",
        arrow: "knowledgeArrowMobile",
    },
];

dropdownToggles.forEach(({ button, dropdown, arrow }) => {
    const btn = document.getElementById(button);
    const drop = document.getElementById(dropdown);
    const icon = document.getElementById(arrow);

    btn?.addEventListener("click", (e) => {
        e.preventDefault();
        const expanded = drop.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
        btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    });
});