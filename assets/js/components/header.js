export function initHeader() {
  const menuBar = document.querySelector(".menu-bar");
  const sideNav = document.querySelector(".header__nav");
  menuBar?.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    sideNav.classList.toggle("active");
    document.body.classList.toggle("active-sidenav");
  });

  if (window.innerWidth < 992) {
    document.addEventListener("click", (e) => {
      const arrow = e.target.closest(".dropdown__arrow");
      if (!arrow) return;

      e.stopPropagation();

      const toggle = arrow.closest(".dropdown__toggle");
      const menu = toggle.nextElementSibling;

      // Close other dropdowns
      document.querySelectorAll(".dropdown__toggle").forEach((t) => {
        if (t !== toggle) {
          t.classList.remove("active");
          t.nextElementSibling.style.maxHeight = null;
        }
      });

      // Toggle current dropdown
      toggle.classList.toggle("active");
      menu.style.maxHeight = menu.style.maxHeight
        ? null
        : menu.scrollHeight + "px";
    });
  }
}
