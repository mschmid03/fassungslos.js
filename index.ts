import { setSliderListener } from "./sliderListener";
import { centerSticky } from "./centerSticky";

document.addEventListener("DOMContentLoaded", () => {
  const sliderNav = document.getElementById("linsenwelt-nav-wrapper");
  const sliderContent = document.getElementById("linsenwelt-content-wrapper");
  const sliderContentItems = sliderContent?.querySelectorAll(
    ".linsenwelt-slider_content-item",
  ) as NodeListOf<Element>;
  sliderContentItems.forEach((item) => {
    item.classList.remove("visible");
  });

  setSliderListener(sliderNav, sliderContentItems);
  document.addEventListener("resize", () => {
    setSliderListener(sliderNav, sliderContentItems);
  });
  if (document.documentElement.clientWidth > 991) {
    centerSticky("sticky-wrapper-abstimmung");
  }
});
