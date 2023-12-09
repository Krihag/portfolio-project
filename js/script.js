import revealElement from "./revealElement.js";

/* COLOR WHEEL - Sidebar */

const root = document.querySelector(":root");
const hiddenColorsContainer = document.querySelector(".wheel-hidden-colors");
const allColors = document.querySelectorAll(".wheel-color-pick");
const secondColors = document.querySelectorAll(".wheel-color-pick-2");

document.querySelector(".color-wheel").addEventListener("click", () => {
  hiddenColorsContainer.classList.toggle("hidden-ele");
});

allColors.forEach((color) =>
  color.addEventListener("click", () => {
    root.style.setProperty("--highlight", color.dataset.color);
  })
);

secondColors.forEach((color) =>
  color.addEventListener("click", () =>
    root.style.setProperty("--highlight-2", color.dataset.color)
  )
);

/* HAMBURGER  */
const hamburgerContainer = document.querySelector(".hamburger-menu");
const hamburgerOpen = document.querySelector(".open-hamburger");
const hamburgerClose = document.querySelector(".close-hamburger");
const sidebar = document.querySelector(".sidebar-nav-container");

hamburgerOpen.addEventListener("click", () => {
  hamburgerOpen.classList.add("hide-hamburger-icon");
  hamburgerClose.classList.remove("hide-hamburger-icon");

  sidebar.style.transform = "translateX(0)";
  hamburgerContainer.style.transform = "translateX(15rem)";
});

hamburgerClose.addEventListener("click", () => {
  hamburgerClose.classList.add("hide-hamburger-icon");
  hamburgerOpen.classList.remove("hide-hamburger-icon");
  sidebar.style.transform = "translateX(-100%)";
  hamburgerContainer.style.transform = "translateX(0)";
});

/* scroll reveal */
const hiddenElements = document.querySelectorAll(".hide-element");
const hiddenNav = document.querySelectorAll(".hidden-nav");

hiddenNav.forEach((nav) => nav.classList.add("show-element"));

revealElement(hiddenElements);

/* NAV - scroll position*/

const sections = document.querySelectorAll("section");
const navElements = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  sections.forEach(function (section, i) {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.clientHeight;
    const middleViewport = window.scrollY + window.innerHeight / 2;

    if (sectionTop < middleViewport && sectionBottom > middleViewport) {
      navElements[i].classList.add("nav-active");
    } else {
      navElements[i].classList.remove("nav-active");
    }
  });
});
