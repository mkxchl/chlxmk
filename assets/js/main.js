const VzxMusic = document.querySelector(".VzxMusic");
const statusX = document.querySelector(".status");
const status_info = document.querySelector(".status_info");
const place = document.querySelector(".place");
const place_info = document.querySelector(".place_info");
const hobby = document.querySelector(".hobby");
const hobby_info = document.querySelector(".hobby_info");
const BodyX = document.querySelector("body");


let BacksoundMusic = new Audio("https://editor-miring-squad.netlify.app/mix/mk-song-1.mp3");
BacksoundMusic.loop = false;
BacksoundMusic.autoplay = false;


function PlayMusic() {
    BacksoundMusic.play();
    VzxMusic.classList.add("HideMusic");
    BodyX.classList.add("ChangeTheme");
}
