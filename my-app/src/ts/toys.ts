import DataType from "./interfaces";

function addToys(toyData: DataType) {
  const newItemToy = document.createElement("div");
  newItemToy?.classList.add("page2-toys-item");

  const newItemTitle = document.createElement("p");
  newItemTitle.textContent = `${toyData.name}`;
  newItemTitle?.classList.add("page2-toys-name");

  const newItemImage = document.createElement("img");
  newItemImage.src = `./images/toys/${toyData.num}.png`;
  newItemImage?.classList.add("page2-toys-image");

  const newItemNumber = document.createElement("p");
  newItemNumber.textContent = `Количество: ${toyData.count}`;
  newItemNumber?.classList.add("page2-toys-count");

  const newItemYear = document.createElement("p");
  newItemYear.textContent = `Год покупки: ${toyData.year}`;

  const newItemForm = document.createElement("p");
  newItemForm.textContent = `Форма игрушки: ${toyData.shape}`;

  const newItemColor = document.createElement("p");
  newItemColor.textContent = `Цвет игрушки: ${toyData.color}`;

  const newItemSize = document.createElement("p");
  newItemSize.textContent = `Размер игрушки: ${toyData.size}`;

  const newItemFavorite = document.createElement("p");
  newItemFavorite.textContent = `Любимая: ${toyData.favorite ? "да" : "нет"}`;

  newItemToy.append(newItemTitle, newItemImage, newItemNumber, newItemYear);
  newItemToy.append(newItemForm, newItemColor, newItemSize, newItemFavorite);
  const myDiv = document.querySelector(".page2-toys-container");
  myDiv?.append(newItemToy);
}

export default addToys;
