"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centerSticky = centerSticky;
function centerSticky(id) {
    var stickyDiv = document.getElementById(id);
    var height = stickyDiv.offsetHeight;
    stickyDiv.style.marginTop = "".concat(height / 2, "px");
    stickyDiv.style.marginBottom = "-".concat(height / 2, "px");
    window.addEventListener("resize", function () {
        height = stickyDiv.offsetHeight;
        stickyDiv.style.marginTop = "".concat(height / 2, "px");
        stickyDiv.style.marginBottom = "-".concat(height / 2, "px");
    });
}
