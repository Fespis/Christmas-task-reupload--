function addGarland(color: string) {
  const light = document.querySelectorAll(".lightrope");
  light.forEach((element) => {
    const elem = element;
    elem.innerHTML = "";
  });

  for (let i = 0; i < 5; i += 1) {
    const li = document.createElement("li");
    const rotate = 65 + 12 * i;

    li.classList.add(`${color}`);
    li.style.transform = `rotate(${rotate}deg) translate(60px) rotate(-${rotate}deg)`;
    light[0].append(li);
  }

  for (let i = 0; i < 7; i += 1) {
    const li = document.createElement("li");
    const rotate = 60 + 10 * i;

    li.classList.add(`${color}`);
    li.style.transform = `rotate(${rotate}deg) translate(85px) rotate(-${rotate}deg)`;
    light[1].append(li);
  }

  for (let i = 0; i < 8; i += 1) {
    const li = document.createElement("li");
    const rotate = 60 + 8 * i;

    li.classList.add(`${color}`);
    li.style.transform = `rotate(${rotate}deg) translate(115px) rotate(-${rotate}deg)`;
    light[2].append(li);
  }

  for (let i = 0; i < 11; i += 1) {
    const li = document.createElement("li");
    const rotate = 60 + 6 * i;

    li.classList.add(`${color}`);
    li.style.transform = `rotate(${rotate}deg) translate(150px) rotate(-${rotate}deg)`;
    light[3].append(li);
  }

  for (let i = 0; i < 18; i += 1) {
    const li = document.createElement("li");
    const rotate = 55 + 4 * i;

    li.classList.add(`${color}`);
    li.style.transform = `rotate(${rotate}deg) translate(190px) rotate(-${rotate}deg)`;
    light[4].append(li);
  }

  for (let i = 0; i < 21; i += 1) {
    const li = document.createElement("li");
    const rotate = 55 + 3.5 * i;

    li.classList.add(`${color}`);
    li.style.transform = `rotate(${rotate}deg) translate(232.5px) rotate(-${rotate}deg)`;
    light[5].append(li);
  }

  for (let i = 0; i < 24; i += 1) {
    const li = document.createElement("li");
    const rotate = 58 + 3 * i;

    li.classList.add(`${color}`);
    li.style.transform = `rotate(${rotate}deg) translate(277.5px) rotate(-${rotate}deg)`;
    light[6].append(li);
  }
}

function garland(e: Event) {
  const target = e?.target as HTMLElement;
  const btn = document.querySelector(".page3-menu-btngarland");
  if (target.dataset.btncolor) {
    btn!.textContent = "Вкл";
    const color = target.dataset.btncolor;
    addGarland(color);
  }
  if (target.closest(".page3-menu-btngarland")) {
    if (btn?.textContent === "Вкл") {
      btn!.textContent = "Выкл";
      const light = document.querySelectorAll(".lightrope");
      light.forEach((element) => {
        const elem = element;
        elem.innerHTML = "";
      });
    } else {
      btn!.textContent = "Вкл";
      addGarland("multicolor");
    }
  }
}
export default garland;
