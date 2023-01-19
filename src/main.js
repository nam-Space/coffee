const topMenu = document.getElementById("nam-top-menu");
const toggleTopMenuIcon = document.getElementById("nam-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle("nam-topmenu-expanded");
        topMenu.classList.toggle("hidden");
    } else {
        if (topMenu.classList.contains("nam-topmenu-expanded")) {
            topMenu.classList.remove("nam-topmenu-expanded");
            topMenu.classList.add("hidden");
        }
    }
});
