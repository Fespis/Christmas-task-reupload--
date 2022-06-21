function background(e: Event) {
  const target = e?.target as HTMLElement;
  if (target.dataset.bg) {
    const backgroundNumber = target.dataset.bg;
    const backgrounds = document.querySelector(".page3-background") as HTMLElement;
    backgrounds.style.backgroundImage = `url(./images/page3/background/${backgroundNumber}.jpg)`;
  }
}
export default background;
