// console.log("30");

// if (window.jQuery) {
//     console.log("jQuery загружен");
// } else {
//     console.log("jQuery не загружен");
// }

// Меню гамбургер
window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav-menu");
    const menuItem = document.querySelectorAll(".nav-menu__list-item");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("nav-menu_active");
    });

    menuItem.forEach(item => {
        item.addEventListener("click", () => {
            // Убираем класс 'hamburger_active' и 'nav-menu_active'
            hamburger.classList.remove("hamburger_active");
            menu.classList.remove("nav-menu_active");
        });
    });
});
