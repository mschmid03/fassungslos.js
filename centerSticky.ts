export function centerSticky(id: string) {
  const stickyDiv = document.getElementById(id) as HTMLElement;
  let height = stickyDiv.offsetHeight;
  stickyDiv.style.marginTop = `${height / 2}px`;
  stickyDiv.style.marginBottom = `-${height / 2}px`;

  window.addEventListener("resize", () => {
    height = stickyDiv.offsetHeight;
    stickyDiv.style.marginTop = `${height / 2}px`;
    stickyDiv.style.marginBottom = `-${height / 2}px`;
  });
}
