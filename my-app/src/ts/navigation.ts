function navigation(e: Event) {
  const target = e?.target as HTMLElement;
  if (target.dataset.topage || target.dataset.frompage) {
    const toPage = target.dataset.topage;
    const fromPage = target.dataset.frompage;

    const goToPage = document.querySelector(`.${toPage}`);
    const goFromPage = document.querySelector(`.${fromPage}`);

    goToPage?.classList.remove("hidden");
    goToPage?.classList.add("block");
    goFromPage?.classList.remove("block");
    goFromPage?.classList.add("hidden");
  }
}
export default navigation;
