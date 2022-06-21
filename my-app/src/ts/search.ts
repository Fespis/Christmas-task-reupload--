function searchByName() {
  const page2NavSearch = document.querySelector(".page2-settings-nav-search") as HTMLInputElement;
  const arrOfName = document.querySelectorAll(".page2-toys-name");
  const searchValue = page2NavSearch?.value.trim().toLowerCase();

  if (searchValue) {
    arrOfName.forEach((nameItem) => {
      const parentNode = nameItem.closest(".page2-toys-item");
      const searchResult = nameItem.textContent?.trim().toLowerCase().search(searchValue);
      if (searchResult === -1) {
        parentNode?.classList.add("hidden");
      } else parentNode?.classList.remove("hidden");
    });
  } else {
    arrOfName.forEach((nameItem) => {
      const parentNode = nameItem.closest(".page2-toys-item");
      parentNode?.classList.remove("hidden");
    });
  }
}
export default searchByName;
