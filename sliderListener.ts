export function setSliderListener(
  sliderNav: HTMLElement | null,
  sliderContentItems: NodeListOf<Element>,
) {
  const sliderItems = sliderNav?.querySelectorAll(".linsenwelt-slider_item");
  sliderItems?.forEach((item, i) => {
    const itemWidth = item.scrollWidth;
    const itemClone = item.cloneNode(true) as Element;
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
            ".linsenwelt-slider_item",
          );
          newSliderItems?.forEach((item, j) => {
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
