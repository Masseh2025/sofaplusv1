"use strict";

const menu = document.querySelector("[data-menu]");
const secondaryNavigation = document.querySelector(
  "[data-secondary-navigation]"
);

menu.addEventListener("click", function () {
  if (this.getAttribute("aria-expanded") === "false") {
    this.setAttribute("aria-expanded", true);
  } else {
    this.setAttribute("aria-expanded", false);
  }
  secondaryNavigation.classList.toggle("invisble");
});
