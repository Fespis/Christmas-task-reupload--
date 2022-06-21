import navigation from "./ts/navigation";
import sort from "./ts/sort";
import data from "./ts/data";
import launchFilterForm from "./ts/filterForm";
import changeFavoritesToys from "./ts/favorites";
import searchByName from "./ts/search";
import addSliders from "./ts/sliders";
import tree from "./ts/tree/tree";
import background from "./ts/tree/background";
import addSnowOrMusic from "./ts/tree/animation";
import garland from "./ts/tree/garland";
import addStandardToys from "./ts/tree/add-toys";
import dragAndDrop from "./ts/tree/drag-drop";

const pages = document.querySelector(".pages");
pages?.addEventListener("click", navigation);

const pages2Settings = document.querySelector(".page2-settings");
pages2Settings?.addEventListener("click", launchFilterForm);

const pages2Toys = document.querySelector(".page2-toys");
pages2Toys?.addEventListener("click", changeFavoritesToys);

const page2SettingsNavSearch = document.querySelector(".page2-settings-nav-search");
page2SettingsNavSearch?.addEventListener("input", searchByName);

const page3MenuSvgcontainer = document.querySelector(".page3-menu-svgcontainer");
page3MenuSvgcontainer?.addEventListener("click", addSnowOrMusic);

const page3MenuDivTrees = document.querySelector(".page3-menu-divtrees");
page3MenuDivTrees?.addEventListener("click", tree);

const page3MenuDivBackground = document.querySelector(".page3-menu-divbackground");
page3MenuDivBackground?.addEventListener("click", background);

const page3MenuDivGarland = document.querySelector(".page3-menu-divgarland");
page3MenuDivGarland?.addEventListener("click", garland);

sort(data);
addSliders();
addStandardToys();
dragAndDrop();
