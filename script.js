"use strict";

const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const btnClose = document.querySelector(".close");
const abSect = document.querySelector(".about_section");
const cntSect = document.querySelector(".contact_section");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  abSect.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  abSect.classList.add("hidden");
  overlay.classList.add("hidden");
};

about.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !abSect.classList.contains("hidden")) {
    closeModal();
  }
});
