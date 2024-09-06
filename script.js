"use strict";

const menu = document.querySelector("[data-menu]");
const secondaryNavigation = document.querySelector(
  "[data-secondary-navigation"
);
const secondaryNavigationList = document.querySelector(
  "[data-secondary-navigation-list]"
);

menu.addEventListener("click", function () {
  if (this.getAttribute("aria-expanded") === "false") {
    this.setAttribute("aria-expanded", true);
    secondaryNavigation.setAttribute("aria-hidden", false);
  } else {
    this.setAttribute("aria-expanded", false);
    secondaryNavigation.setAttribute("aria-hidden", true);
  }
  secondaryNavigationList.classList.toggle("invisble");
});
