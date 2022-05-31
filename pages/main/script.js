"use strict";
const burger = document.querySelector(`.burger`);
const popup = document.querySelector(`.popup`);
const logo = document.querySelector(`#logo`);
burger.addEventListener(`click`, (e) => {
  e.preventDefault();
  console.log(`Burger clicked`);
  popup.classList.toggle(`hidden`);
  logo.classList.toggle(`logo_none`);
  console.log(popup);
  console.log(logo);
  e.stopPropagation();
});
