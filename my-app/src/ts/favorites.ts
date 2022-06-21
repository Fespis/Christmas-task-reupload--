import addStandardToys from "./tree/add-toys";
import dragAndDrop from "./tree/drag-drop";

function addOnlyFavoritesToys(arrFavoriteToys: HTMLCollectionOf<Element>) {
  const page3 = document.querySelector(".page3-toys-divalltoys");
  page3!.innerHTML = "";
  for (let i = 0; i <= arrFavoriteToys.length; i += 1) {
    if (arrFavoriteToys[i] === undefined) {
      break;
    }

    const newItemToy = document.createElement("div");
    newItemToy?.classList.add("page3-toys-itemalltoys");
    newItemToy.dataset.toynumber = `${i}`;

    const imgToy = document.createElement("img");
    imgToy?.classList.add("page3-favorites-card");
    const page2ToysImage = arrFavoriteToys[i].querySelector(".page2-toys-image");
    const srcImg = page2ToysImage?.getAttribute("src");
    imgToy.src = `${srcImg}`;

    const countToy = document.createElement("p");
    countToy?.classList.add("page3-favorites-count");
    const page2ToysCount = arrFavoriteToys[i]?.querySelector(".page2-toys-count")?.textContent;
    const count = page2ToysCount?.substr(12);
    countToy.textContent = `${count}`;

    newItemToy.append(imgToy, countToy);
    page3?.append(newItemToy);
  }
}

function deleteToysOnTree() {
  const toysOnTree = document.querySelectorAll(".card-on-tree");
  toysOnTree.forEach((toy) => toy.remove());
}

function changeCountOfFavoritesToys(e: Event) {
  const target = e?.target as HTMLElement;
  const maxFavoritesNumber = 20;

  if (target.closest(".page2-toys-item")) {
    const activeCollection = document.getElementsByClassName("favorites");
    const arrayList = Array.prototype.slice.call(activeCollection);
    const page2ToysFavorites = document.querySelector(".page2-toys-favorites");

    if (arrayList.length < maxFavoritesNumber) {
      const item = target.closest(".page2-toys-item");
      item?.classList.toggle("favorites");
      const favoritesNumber = document.getElementsByClassName("favorites");
      page2ToysFavorites!.textContent = `Избранное: ${favoritesNumber.length}`;
    }

    if (arrayList.length === maxFavoritesNumber) {
      if (target.closest(".favorites")) {
        const item = target.closest(".page2-toys-item");
        item?.classList.remove("favorites");
        const favoritesNumber = document.getElementsByClassName("favorites");
        page2ToysFavorites!.textContent = `Избранное: ${favoritesNumber.length}`;
      } else {
        const page2MaxFavorites = document.querySelector(".page2-max-favorites");
        page2MaxFavorites?.classList.remove("hidden");
        page2MaxFavorites?.classList.add("block");
      }
    }
  }
}

function addSomeToysInCollection() {
  const favoritesElement = document.getElementsByClassName("favorites");

  if (favoritesElement.length > 0) {
    addOnlyFavoritesToys(favoritesElement);
    dragAndDrop();
    deleteToysOnTree();
  } else {
    addStandardToys();
    dragAndDrop();
    deleteToysOnTree();
  }
}

function changeFavoritesToys(e: Event) {
  changeCountOfFavoritesToys(e);
  addSomeToysInCollection();
}
export default changeFavoritesToys;
