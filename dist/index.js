"use strict";
(() => {
  // sliderListener.ts
  function setSliderListener(sliderNav, sliderContentItems) {
    const sliderItems = sliderNav?.querySelectorAll(".linsenwelt-slider_item");
    sliderItems?.forEach((item, i) => {
      const itemWidth = item.scrollWidth;
      const itemClone = item.cloneNode(true);
      console.log(itemWidth);
      console.log(itemClone);
      const itemElement = item.parentNode?.replaceChild(itemClone, item);
      console.log(itemClone);
      itemClone?.addEventListener("click", () => {
        itemClone.classList.add("active");
        console.log(itemElement);
        if (sliderContentItems) {
          sliderContentItems[i].classList.add("active");
          if (sliderNav) {
            sliderNav.style.transform = `translateX(calc((${i} * (-${itemWidth}px - 1.25rem)`;
            const newSliderItems = sliderNav?.querySelectorAll(
              ".linsenwelt-slider_item"
            );
            newSliderItems?.forEach((item2, j) => {
              if (j != i) {
                item2.classList.remove("active");
                sliderContentItems[j].classList.remove("active");
              }
            });
          }
        }
      });
    });
  }

  // centerSticky.ts
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

  // index.ts
  document.addEventListener("DOMContentLoaded", () => {
    const sliderNav = document.getElementById("linsenwelt-nav-wrapper");
    const sliderContent = document.getElementById("linsenwelt-content-wrapper");
    const sliderContentItems = sliderContent?.querySelectorAll(
      ".linsenwelt-slider_content-item"
    );
    sliderContentItems.forEach((item) => {
      item.classList.remove("visible");
      console.log(item.classList);
    });
    setSliderListener(sliderNav, sliderContentItems);
    document.addEventListener("resize", () => {
      setSliderListener(sliderNav, sliderContentItems);
    });
    centerSticky("sticky-wrapper-abstimmung");
  });
})();
//# sourceMappingURL=index.js.map
