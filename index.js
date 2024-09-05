function setSliderListener(sliderNav) {
    var sliderItems = sliderNav === null || sliderNav === void 0 ? void 0 : sliderNav.querySelectorAll(".linsenwelt-slider_item");
    sliderItems === null || sliderItems === void 0 ? void 0 : sliderItems.forEach(function (item, i) {
        var _a;
        var itemWidth = item.scrollWidth;
        var itemClone = item.cloneNode(true);
        console.log(itemWidth);
        console.log(itemClone);
        var itemElement = (_a = item.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(itemClone, item);
        console.log(itemClone);
        itemClone === null || itemClone === void 0 ? void 0 : itemClone.addEventListener("click", function () {
            itemClone.classList.add("active");
            console.log(itemElement);
            if (sliderContentItems) {
                sliderContentItems[i].classList.add("active");
                if (sliderNav) {
                    sliderNav.style.transform = "translateX(calc((".concat(i, " * (-").concat(itemWidth, "rem / 16 - 1.25rem / 3))");
                    var newSliderItems = sliderNav === null || sliderNav === void 0 ? void 0 : sliderNav.querySelectorAll(".linsenwelt-slider_item");
                    newSliderItems === null || newSliderItems === void 0 ? void 0 : newSliderItems.forEach(function (item, j) {
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
var sliderNav = document.getElementById("linsenwelt-nav-wrapper");
var sliderContent = document.getElementById("linsenwelt-content-wrapper");
var sliderContentItems = sliderContent === null || sliderContent === void 0 ? void 0 : sliderContent.querySelectorAll(".linsenwelt-slider_content-item");
setSliderListener(sliderNav);
document.addEventListener("resize", function () {
    setSliderListener(sliderNav);
});
