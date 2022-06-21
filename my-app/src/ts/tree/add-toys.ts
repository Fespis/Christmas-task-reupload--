import data from "../data";

function addStandardToys() {
  const page3 = document.querySelector(".page3-toys-divalltoys");
  page3!.innerHTML = "";

  for (let i = 1; i <= 20; i += 1) {
    const newItemToy = document.createElement("div");
    newItemToy?.classList.add("page3-toys-itemalltoys");
    newItemToy.dataset.toynumber = `${i}`;

    const imgToy = document.createElement("img");
    imgToy?.classList.add("page3-favorites-card");
    imgToy.src = `./images/toys/${i}.png`;

    const countToy = document.createElement("p");
    countToy?.classList.add("page3-favorites-count");
    const dataCount = data[i].count;
    countToy.textContent = `${dataCount}`;

    newItemToy.append(imgToy, countToy);

    page3?.append(newItemToy);
  }
}

export default addStandardToys;
