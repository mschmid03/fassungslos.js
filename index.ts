import { setSliderListener } from "./sliderListener";
import { centerSticky } from "./centerSticky";

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
centerSticky("sticky-wrapper-abstimmung");
