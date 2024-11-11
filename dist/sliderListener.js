"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSliderListener = setSliderListener;
function setSliderListener(sliderNav, sliderContentItems) {
    const sliderItems = sliderNav === null || sliderNav === void 0 ? void 0 : sliderNav.querySelectorAll(".linsenwelt-slider_item");
    sliderItems === null || sliderItems === void 0 ? void 0 : sliderItems.forEach((item, i) => {
        var _a;
        const itemWidth = item.scrollWidth;
        const itemClone = item.cloneNode(true);
        console.log(itemWidth);
        console.log(itemClone);
        const itemElement = (_a = item.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(itemClone, item);
        console.log(itemClone);
        itemClone === null || itemClone === void 0 ? void 0 : itemClone.addEventListener("click", () => {
            itemClone.classList.add("active");
            console.log(itemElement);
            if (sliderContentItems) {
                sliderContentItems[i].classList.add("active");
                if (sliderNav) {
                    sliderNav.style.transform = `translateX(calc((${i} * (-${itemWidth}px - 1.25rem)`;
                    const newSliderItems = sliderNav === null || sliderNav === void 0 ? void 0 : sliderNav.querySelectorAll(".linsenwelt-slider_item");
                    newSliderItems === null || newSliderItems === void 0 ? void 0 : newSliderItems.forEach((item, j) => {
                        if (j != i) {
                            item.classList.remove("active");
                            sliderContentItems[j].classList.remove("active");
                        }
                    });
                }
            }
        });
    });
}
