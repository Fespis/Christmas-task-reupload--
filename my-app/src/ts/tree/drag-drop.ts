function dragStart(e: DragEvent) {
  const target = e.target as HTMLElement;
  target.classList.add("DragAndDrop");
}

function dragEnd(e: DragEvent) {
  const target = e.target as HTMLElement;
  target.classList.remove("DragAndDrop");
}

function dragOver(e: DragEvent) {
  e.preventDefault();
}

function createNewImageToy(toyNumber: string, tree: DragEvent, currentToyImage: HTMLElement) {
  const imgForTree = document.createElement("img");

  imgForTree.classList.add("page3-favorites-card");
  imgForTree.classList.add("card-on-tree");
  imgForTree.src = `${currentToyImage.getAttribute("src")}`;
  imgForTree.dataset.toygroup = `${toyNumber}`;
  imgForTree.style.position = "absolute";
  imgForTree.style.left = `${tree.offsetX - 15}px`;
  imgForTree.style.top = `${tree.offsetY - 15}px`;
  imgForTree.style.zIndex = "1000";

  return imgForTree;
}

function dragDropOnTree(tree: DragEvent) {
  const currentToyImage = document.querySelector(".DragAndDrop") as HTMLElement;
  const currentToyParentZone = currentToyImage?.closest(".page3-toys-itemalltoys") as HTMLElement;
  const currentToyCountElement = currentToyParentZone?.querySelector(".page3-favorites-count");
  const pageBackgroundTree = document.querySelector(".garland-tree-container") as HTMLElement;

  if (currentToyParentZone && currentToyCountElement) {
    const countCurrentToys = currentToyCountElement.textContent;
    const toyNumber = currentToyParentZone?.dataset.toynumber;

    const imgForTree = createNewImageToy(toyNumber as string, tree, currentToyImage);

    imgForTree?.addEventListener("dragstart", dragStart);
    imgForTree?.addEventListener("dragend", dragEnd);

    if (countCurrentToys !== null && +countCurrentToys > 1) {
      currentToyCountElement.textContent = `${+countCurrentToys - 1}`;

      pageBackgroundTree.append(imgForTree);
    }

    if (countCurrentToys !== null && +countCurrentToys === 1) {
      currentToyImage.style.display = "none";

      currentToyCountElement.textContent = `${+countCurrentToys - 1}`;
      pageBackgroundTree.append(imgForTree);
    }
  } else {
    const toyNumber = currentToyImage?.dataset.toygroup;
    const imgForTree = createNewImageToy(toyNumber as string, tree, currentToyImage);

    imgForTree?.addEventListener("dragstart", dragStart);
    imgForTree?.addEventListener("dragend", dragEnd);

    currentToyImage.remove();
    pageBackgroundTree.append(imgForTree);
  }
}

function dragDropOnCollection() {
  const currentImage = document.querySelector(".DragAndDrop") as HTMLElement;

  if (currentImage.dataset.toygroup) {
    const toyGroupNumber = currentImage.dataset.toygroup;

    const currentCollectionToy = document.querySelector(`[data-toynumber="${toyGroupNumber}"]`);
    const currentCountToy = currentCollectionToy?.querySelector(".page3-favorites-count");
    const imageInCollection = currentCollectionToy?.querySelector(
      ".page3-favorites-card"
    ) as HTMLElement;

    if (currentCountToy && currentCountToy.textContent && imageInCollection) {
      currentCountToy.textContent = `${+currentCountToy.textContent + 1}`;
      currentImage.remove();
      imageInCollection.style.display = "block";
    }
  }
}

function dragAndDrop() {
  const pageBackgroundTree = document.querySelector(".garland-tree-container") as HTMLElement;
  const cards = document.querySelectorAll(".page3-favorites-card") as NodeListOf<HTMLElement>;
  const pageAllToys = document.querySelector(".page3-toys-divalltoys") as HTMLElement;

  cards.forEach((card) => {
    card?.addEventListener("dragstart", dragStart);
    card?.addEventListener("dragend", dragEnd);
  });

  pageBackgroundTree?.addEventListener("dragover", dragOver);
  pageAllToys?.addEventListener("dragover", dragOver);

  pageBackgroundTree?.addEventListener("drop", dragDropOnTree);
  pageAllToys?.addEventListener("drop", dragDropOnCollection);
}
export default dragAndDrop;
