import data from "./data";
import sort from "./sort";
import DataType from "./interfaces";
import sliders from "./sliders";

function filterByDoubleSlider(dataFilter: Array<DataType>, dataFilterRanges: Array<DataType>) {
  const slidersCollectionOfCount = document.getElementsByClassName("page2-inputs-count");
  const slidersCount = Array.prototype.slice.call(slidersCollectionOfCount);
  const slidersCollectionOfYear = document.getElementsByClassName("page2-inputs-year");
  const slidersYear = Array.prototype.slice.call(slidersCollectionOfYear);

  let standardFilterData = dataFilter;
  let rangeFilterData = dataFilterRanges;

  if (dataFilter.length === 0) {
    rangeFilterData = data.filter((currentValue) => currentValue.count >= slidersCount[0].value);
    rangeFilterData = rangeFilterData.filter(
      (currentValue) => currentValue.count <= slidersCount[1].value
    );
    rangeFilterData = rangeFilterData.filter(
      (currentValue) => currentValue.year >= slidersYear[0].value
    );
    rangeFilterData = rangeFilterData.filter(
      (currentValue) => currentValue.year <= slidersYear[1].value
    );
  } else {
    standardFilterData = standardFilterData.filter(
      (currentValue) => currentValue.count >= slidersCount[0].value
    );
    standardFilterData = standardFilterData.filter(
      (currentValue) => currentValue.count <= slidersCount[1].value
    );
    standardFilterData = standardFilterData.filter(
      (currentValue) => currentValue.year >= slidersYear[0].value
    );
    standardFilterData = standardFilterData.filter(
      (currentValue) => currentValue.year <= slidersYear[1].value
    );
  }

  const dataObject = {
    filterRanges: rangeFilterData,
    filter: standardFilterData,
  };

  return dataObject;
}

function filters() {
  let dataFilter: Array<DataType> = [];
  const dataFilterRanges: Array<DataType> = [];
  const filterValues: Array<string> = [];
  const filterKeys: Array<string> = [];

  const activeCollectionFilters = document.getElementsByClassName("active");
  const arrayListFilters = Array.prototype.slice.call(activeCollectionFilters);

  arrayListFilters.forEach((filterItem) => {
    const itemValue = filterItem.dataset.filter;
    const itemKey = filterItem.dataset.item;
    filterValues.push(itemValue);
    filterKeys.push(itemKey);
  });

  data.forEach((dataItem) => {
    if (filterKeys.length === 0) {
      dataFilter = data;
    } else {
      const color = filterValues.find(
        (colorItem) => colorItem.toLowerCase() === dataItem.color.toLowerCase()
      );
      const shape = filterValues.find(
        (colorItem) => colorItem.toLowerCase() === dataItem.shape.toLowerCase()
      );
      const size = filterValues.find(
        (colorItem) => colorItem.toLowerCase() === dataItem.size.toLowerCase()
      );
      const favorite = filterValues.find(
        (favItem) => favItem.toLowerCase() === `${dataItem.favorite}`
      );

      const shapeFilter = filterKeys.find((shapeKey) => shapeKey === "shape");
      const colorFilter = filterKeys.find((colorKey) => colorKey === "color");
      const sizeFilter = filterKeys.find((sizeKey) => sizeKey === "size");
      const favFilter = filterKeys.find((favKey) => favKey === "favorite");

      if (shape === undefined && shapeFilter) return;
      if (color === undefined && colorFilter) return;
      if (size === undefined && sizeFilter) return;
      if (favorite === undefined && favFilter) return;

      dataFilter.push(dataItem);
    }
  });

  const dataFilterDoubleSliders = filterByDoubleSlider(dataFilter, dataFilterRanges);

  if (dataFilterDoubleSliders.filter.length === 0) {
    if (arrayListFilters.length === 0) {
      sort(dataFilterDoubleSliders.filterRanges);
    } else {
      sort(dataFilterDoubleSliders.filter);
    }
  } else {
    sort(dataFilterDoubleSliders.filter);
  }
}

function resetFilters() {
  const activeCollection = document.getElementsByClassName("active");
  const arrayList = Array.prototype.slice.call(activeCollection);

  arrayList.forEach((activeItem) => {
    activeItem.classList.remove("active");
    sort(data);
  });

  const slidersCollectionOfYear = document.getElementsByClassName("page2-inputs-year");
  const slidersYear = Array.prototype.slice.call(slidersCollectionOfYear);
  const slidersCollectionOfCount = document.getElementsByClassName("page2-inputs-count");
  const slidersCount = Array.prototype.slice.call(slidersCollectionOfCount);
  slidersYear[0].value = 1940;
  slidersYear[1].value = 2020;
  slidersCount[0].value = 1;
  slidersCount[1].value = 12;
  sliders();

  const page2InputsCountMin = document.getElementById("page2-inputs-count-min");
  const page2InputsCountMax = document.getElementById("page2-inputs-count-max");
  page2InputsCountMin!.textContent = `${slidersCount[0].value}`;
  page2InputsCountMax!.textContent = `${slidersCount[1].value}`;

  const page2InputsYearMin = document.getElementById("page2-inputs-year-min");
  const page2InputsYearMax = document.getElementById("page2-inputs-year-max");
  page2InputsYearMin!.textContent = `${slidersYear[0].value}`;
  page2InputsYearMax!.textContent = `${slidersYear[1].value}`;
}

function launchFilterForm(e: Event) {
  const target = e?.target as HTMLElement;

  if (target.closest(".page2-settings-formitem")) {
    const item = target.closest(".page2-settings-formitem");
    item?.classList.toggle("active");
    filters();
  }

  if (target.closest(".page2-settings-coloritem")) {
    const item = target.closest(".page2-settings-coloritem");
    item?.classList.toggle("active");
    filters();
  }

  if (target.closest(".page2-settings-sizeitem")) {
    const item = target.closest(".page2-settings-sizeitem");
    item?.classList.toggle("active");
    filters();
  }

  if (target.closest(".page2-settings-favorites-title")) {
    const item = target.closest(".page2-settings-favorites-title");
    item?.classList.toggle("active");
    filters();
  }

  if (target.closest(".middle-count")) {
    filters();
  }

  if (target.closest(".middle-year")) {
    filters();
  }

  if (target.closest(".page2-settings-button")) {
    resetFilters();
    filters();
  }
}

export default launchFilterForm;
