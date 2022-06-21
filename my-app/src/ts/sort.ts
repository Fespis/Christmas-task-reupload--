import addToys from "./toys";
import DataType from "./interfaces";

const page2ToysContainer = document.querySelector(".page2-toys-container");

function removeAllCard() {
  while (page2ToysContainer?.firstChild) {
    page2ToysContainer.removeChild(page2ToysContainer?.firstChild);
  }
}

function sortCardABC(arr: Array<DataType>) {
  arr.sort((a, b) => (a.name > b.name ? 1 : -1));
}

function sortCardCBA(arr: Array<DataType>) {
  arr.sort((a, b) => (a.name > b.name ? -1 : 1));
}

function sortCardIncrease(arr: Array<DataType>) {
  arr.sort((a, b) => (a.count > b.count ? 1 : -1));
}

function sortCardDecrease(arr: Array<DataType>) {
  arr.sort((a, b) => (a.count > b.count ? -1 : 1));
}

function sortOnChange(DataSort: Array<DataType>) {
  const select = document.querySelector("select");
  if (select !== null) {
    if (select.value === "От А до Я") {
      sortCardABC(DataSort);
      removeAllCard();
      DataSort.forEach((toyData) => {
        addToys(toyData);
      });
    }
    if (select.value === "От Я до А") {
      sortCardCBA(DataSort);
      removeAllCard();
      DataSort.forEach((toyData) => {
        addToys(toyData);
      });
    }
    if (select.value === "По возрастанию") {
      sortCardIncrease(DataSort);
      removeAllCard();
      DataSort.forEach((toyData) => {
        addToys(toyData);
      });
    }
    if (select.value === "По убыванию") {
      sortCardDecrease(DataSort);
      removeAllCard();
      DataSort.forEach((toyData) => {
        addToys(toyData);
      });
    }
  }
}

function sort(arr: Array<DataType>) {
  const DataSort = arr;
  const select = document.querySelector("select");

  if (select?.value === "От А до Я") sortCardABC(DataSort);
  if (select?.value === "От Я до А") sortCardCBA(DataSort);
  if (select?.value === "По возрастанию") sortCardIncrease(DataSort);
  if (select?.value === "По убыванию") sortCardDecrease(DataSort);

  removeAllCard();

  DataSort.forEach((toyData) => {
    addToys(toyData);
  });

  select?.addEventListener("change", () => sortOnChange(DataSort));
}
export default sort;
