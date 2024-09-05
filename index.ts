import { setSliderListener } from "./sliderListener.ts";
import { centerSticky } from "./centerSticky.ts";

const sliderNav = document.getElementById("linsenwelt-nav-wrapper");
const sliderContent = document.getElementById("linsenwelt-content-wrapper");
const sliderContentItems = sliderContent?.querySelectorAll(
  ".linsenwelt-slider_content-item",
) as NodeListOf<Element>;
setSliderListener(sliderNav, sliderContentItems);
document.addEventListener("resize", () => {
  setSliderListener(sliderNav, sliderContentItems);
});
centerSticky("sticky-wrapper-abstimmung");
