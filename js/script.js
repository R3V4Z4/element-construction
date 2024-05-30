"use strict";

let elements = document.querySelectorAll(".atag");

elements.forEach(function (element, index) {
  element.addEventListener("click", function () {
    let dropdownMenuId = `about-company${index + 1}`;
    let dropdownMenu = document.getElementById(dropdownMenuId);
    let icon = element.querySelector("i");

    if (dropdownMenu) {
      dropdownMenu.classList.toggle("isactive");
      icon.classList.toggle("fa-angle-up");
      icon.classList.toggle("fa-angle-down");
    } else {
      console.error("Dropdown not found with ID:", dropdownMenuId);
    }
  });
});

const buttons = document.querySelectorAll(".more");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const link = this.dataset.link;
    window.location.href = link;
  });
});

// slider

import { slider } from "./slider.js";

slider();
