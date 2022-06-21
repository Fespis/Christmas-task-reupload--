const audio = new Audio();
audio.src = "../images/page3/audio/audio.mp3";

function addSnowOrMusic(e: Event) {
  const target = e?.target as HTMLElement;
  if (target.closest(".page3-menu-snow")) {
    const page3BackgroundWrapper = document.querySelector(".page3-background-wrapper");
    const page3MenuSnow = document.querySelector(".page3-menu-snow");

    page3BackgroundWrapper?.classList.toggle("hidden");
    page3MenuSnow?.classList.toggle("page3-active");
  }
  if (target.closest(".page3-menu-music")) {
    const page3MenuMusic = document.querySelector(".page3-menu-music");
    page3MenuMusic?.classList.toggle("page3-active");
    if (target.closest(".page3-active")) {
      audio.play();
    } else {
      audio.load();
    }
  }
}

export default addSnowOrMusic;
