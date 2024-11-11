"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sliderListener_1 = require("./sliderListener");
var centerSticky_1 = require("./centerSticky");
document.addEventListener("DOMContentLoaded", function () {
    var sliderNav = document.getElementById("linsenwelt-nav-wrapper");
    var sliderContent = document.getElementById("linsenwelt-content-wrapper");
    var sliderContentItems = sliderContent === null || sliderContent === void 0 ? void 0 : sliderContent.querySelectorAll(".linsenwelt-slider_content-item");
    sliderContentItems.forEach(function (item) {
        item.classList.remove("visible");
        console.log(item.classList);
    });
    (0, sliderListener_1.setSliderListener)(sliderNav, sliderContentItems);
    document.addEventListener("resize", function () {
        (0, sliderListener_1.setSliderListener)(sliderNav, sliderContentItems);
    });
    if (document.documentElement.clientWidth > 991) {
        (0, centerSticky_1.centerSticky)("sticky-wrapper-abstimmung");
    }
});
