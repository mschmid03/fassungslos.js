"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sliderListener_1 = require("./sliderListener");
const centerSticky_1 = require("./centerSticky");
const sliderNav = document.getElementById("linsenwelt-nav-wrapper");
const sliderContent = document.getElementById("linsenwelt-content-wrapper");
const sliderContentItems = sliderContent === null || sliderContent === void 0 ? void 0 : sliderContent.querySelectorAll(".linsenwelt-slider_content-item");
(0, sliderListener_1.setSliderListener)(sliderNav, sliderContentItems);
document.addEventListener("resize", () => {
    (0, sliderListener_1.setSliderListener)(sliderNav, sliderContentItems);
});
(0, centerSticky_1.centerSticky)("sticky-wrapper-abstimmung");
