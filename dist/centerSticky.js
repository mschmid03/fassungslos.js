"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centerSticky = centerSticky;
function centerSticky(id) {
    const stickyDiv = document.getElementById(id);
    let height = stickyDiv.offsetHeight;
    stickyDiv.style.marginTop = `${height / 2}px`;
    stickyDiv.style.marginBottom = `-${height / 2}px`;
    window.addEventListener("resize", () => {
        height = stickyDiv.offsetHeight;
        stickyDiv.style.marginTop = `${height / 2}px`;
        stickyDiv.style.marginBottom = `-${height / 2}px`;
    });
}
