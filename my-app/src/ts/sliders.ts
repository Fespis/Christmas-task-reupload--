function changeTextCountValueMin(rangeValueMin: string, minValueElement: HTMLElement) {
  const minDivElement = minValueElement;
  minDivElement.textContent = `${rangeValueMin}`;
}

function changeTextCountValueMax(rangeValueMin: string, maxValueElement: HTMLElement) {
  const maxDivElement = maxValueElement;
  maxDivElement.textContent = `${rangeValueMin}`;
}

function setLeftValueSliderCount() {
  const inputLeft = document.getElementById("input-left-count");
  const inputRight = document.getElementById("input-right-count");
  const page2InputsCountMin = document.getElementById("page2-inputs-count-min");

  const thumbLeft = document.querySelector(".slider-count > .thumb.left");
  const range = document.querySelector(".slider-count > .range");

  const thisA = inputLeft as HTMLInputElement;
  if (thisA !== null && inputRight !== null && thumbLeft !== null && range !== null) {
    const min = parseInt(thisA.min, 10);
    const max = parseInt(thisA.max, 10);

    thisA.value = `${Math.min(
      parseInt(thisA.value, 10),
      parseInt((inputRight as HTMLInputElement).value, 10) - 1
    )}`;

    const percent = ((+thisA.value - min) / (max - min)) * 100;

    (thumbLeft as HTMLElement).style.left = `${percent}%`;
    (range as HTMLElement).style.left = `${percent}%`;

    const rangeValueMin = `${Math.ceil((12 * percent) / 100)}`;
    if (rangeValueMin === "0") {
      changeTextCountValueMin("1", page2InputsCountMin as HTMLElement);
    } else changeTextCountValueMin(rangeValueMin, page2InputsCountMin as HTMLElement);
  }
}

function setRightValueSliderCount() {
  const inputLeft = document.getElementById("input-left-count");
  const inputRight = document.getElementById("input-right-count");
  const page2InputsCountMax = document.getElementById("page2-inputs-count-max");

  const thumbRight = document.querySelector(".slider-count > .thumb.right");
  const range = document.querySelector(".slider-count > .range");

  const thisB = inputRight as HTMLInputElement;
  if (thisB !== null && inputLeft !== null && thumbRight !== null && range !== null) {
    const min = parseInt(thisB.min, 10);
    const max = parseInt(thisB.max, 10);

    thisB.value = `${Math.max(
      parseInt(thisB.value, 10),
      parseInt((inputLeft as HTMLInputElement).value, 10) + 1
    )}`;

    const percent = ((+thisB.value - min) / (max - min)) * 100;

    (thumbRight as HTMLElement).style.right = `${100 - percent}%`;
    (range as HTMLElement).style.right = `${100 - percent}%`;

    const rangeValueMax = `${Math.ceil((12 * percent) / 100)}`;
    changeTextCountValueMax(rangeValueMax, page2InputsCountMax as HTMLElement);
  }
}

function launchSliderCount() {
  const inputLeft = document.getElementById("input-left-count");
  const inputRight = document.getElementById("input-right-count");

  const thumbLeft = document.querySelector(".slider-count > .thumb.left");
  const thumbRight = document.querySelector(".slider-count > .thumb.right");

  setLeftValueSliderCount();
  setRightValueSliderCount();

  if (inputRight !== null && inputLeft !== null && thumbRight !== null && thumbLeft !== null) {
    inputLeft.addEventListener("input", setLeftValueSliderCount);
    inputRight.addEventListener("input", setRightValueSliderCount);

    inputLeft.addEventListener("mouseover", () => {
      thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", () => {
      thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", () => {
      thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", () => {
      thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", () => {
      thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", () => {
      thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", () => {
      thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", () => {
      thumbRight.classList.remove("active");
    });
  }
}

function setLeftValueSliderYear() {
  const page2InputsYearMin = document.getElementById("page2-inputs-year-min");
  const inputLeft = document.getElementById("input-left-year");
  const inputRight = document.getElementById("input-right-year");

  const thumbLeft = document.querySelector(".slider-year > .thumb.left");
  const range = document.querySelector(".slider-year > .range");

  const thisA = inputLeft as HTMLInputElement;
  if (thisA !== null && inputRight !== null && thumbLeft !== null && range !== null) {
    const min = parseInt(thisA.min, 10);
    const max = parseInt(thisA.max, 10);

    thisA.value = `${Math.min(
      parseInt(thisA.value, 10),
      parseInt((inputRight as HTMLInputElement).value, 10) - 10
    )}`;

    const percent = ((+thisA.value - min) / (max - min)) * 100;

    (thumbLeft as HTMLElement).style.left = `${percent}%`;
    (range as HTMLElement).style.left = `${percent}%`;

    const rangeValueMin = `${(percent / 100) * 80 + 1940}`;
    changeTextCountValueMin(rangeValueMin, page2InputsYearMin as HTMLElement);
  }
}

function setRightValueSliderYear() {
  const page2InputsYearMax = document.getElementById("page2-inputs-year-max");
  const inputLeft = document.getElementById("input-left-year");
  const inputRight = document.getElementById("input-right-year");

  const thumbRight = document.querySelector(".slider-year > .thumb.right");
  const range = document.querySelector(".slider-year > .range");

  const thisB = inputRight as HTMLInputElement;
  if (thisB !== null && inputLeft !== null && thumbRight !== null && range !== null) {
    const min = parseInt(thisB.min, 10);
    const max = parseInt(thisB.max, 10);

    thisB.value = `${Math.max(
      parseInt(thisB.value, 10),
      parseInt((inputLeft as HTMLInputElement).value, 10) + 10
    )}`;

    const percent = ((+thisB.value - min) / (max - min)) * 100;

    (thumbRight as HTMLElement).style.right = `${100 - percent}%`;
    (range as HTMLElement).style.right = `${100 - percent}%`;

    const rangeValueMax = `${(percent / 100) * 80 + 1940}`;
    changeTextCountValueMax(rangeValueMax, page2InputsYearMax as HTMLElement);
  }
}

function launchSliderYear() {
  const inputLeft = document.getElementById("input-left-year");
  const inputRight = document.getElementById("input-right-year");

  const thumbLeft = document.querySelector(".slider-year > .thumb.left");
  const thumbRight = document.querySelector(".slider-year > .thumb.right");

  setLeftValueSliderYear();
  setRightValueSliderYear();

  if (inputRight !== null && inputLeft !== null && thumbRight !== null && thumbLeft !== null) {
    inputLeft.addEventListener("input", setLeftValueSliderYear);
    inputRight.addEventListener("input", setRightValueSliderYear);

    inputLeft.addEventListener("mouseover", () => {
      thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", () => {
      thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", () => {
      thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", () => {
      thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", () => {
      thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", () => {
      thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", () => {
      thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", () => {
      thumbRight.classList.remove("active");
    });
  }
}

function addSliders() {
  launchSliderCount();
  launchSliderYear();
}

export default addSliders;
