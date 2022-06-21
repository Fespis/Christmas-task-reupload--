function tree(e: Event) {
  const target = e?.target as HTMLElement;

  if (target.dataset.tree) {
    const treeNumber = target.dataset.tree;
    const trees = document.querySelector(".page-background-tree") as HTMLImageElement;
    trees.src = `./images/page3/trees/${treeNumber}.png`;
  }
}
export default tree;
