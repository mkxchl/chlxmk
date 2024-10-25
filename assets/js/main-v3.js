/*=============== FILTERS TABS ===============*/
const VanzXCard = document.querySelector(".VanzXCard");
const BodyX = document.querySelector("body")
const XAbout = document.getElementById("#XAbout");
const XActivity = document.getElementById("#Activity");
const XConnect = document.getElementById("#Connect");
const VanzMenu = document.querySelector(".VanzMenu");
const VanzGame = document.querySelector(".VanzGame");
const VanzMenuOverlay = document.querySelector(".VanzMenuOverlay");
const VanzMusicOverlay = document.querySelector(".VanzMusicOverlay");
const VanzGameOverlay = document.querySelector(".VanzGameOverlay");
const VanzMusic = document.querySelector(".VanzMusic");
const VanzAlert = document.querySelector(".VanzAlert");
const VanzXNavMusic = document.querySelector(".VanzXNavMusic");
const MusicA = document.getElementById("#MusicA");
const PictVanz =document.getElementById("#PictVanz");
const FullVolume = "bx bx-volume-full";
const MuteVolume = "bx bx-volume-mute";
const IconMusic = document.querySelector(".IconMusic");
const snowflakesSnow = document.querySelector('.snowflakes');
const snowflakes = document.querySelectorAll('.snowflake');
const VanzXCardThumb = document.querySelector(".VanzXCardThumb");
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      klik.play();
      tc.classList.remove("FiltersActive");
    });
    target.classList.add("FiltersActive");

    tabs.forEach((t) => {
      klik.play();
      t.classList.remove("VanzBtnActive");
    });
    tab.classList.add("VanzBtnActive");
    klik.play();
  });
});

function OpenMenu() {
  VanzMenu.classList.add("VanzMenuShow");
  VanzXCard.style.overflow = "hidden";
  klik.play();
}
function CloseOverlay() {
  klik.play();
  VanzXCard.style.overflow = "auto";
  VanzMenu.classList.remove("VanzMenuShow");
  VanzMusic.classList.remove("VanzMusicShow");
  VanzGame.classList.remove("VanzGameShow");
}
function OpenMusic() {
  klik.play();
  VanzMusic.classList.add("VanzMusicShow");
  VanzMenu.classList.remove("VanzMenuShow");
  VanzGame.classList.remove("VanzGameShow");
}
function OpenGame() {
  klik.play();
  VanzMenu.classList.remove("VanzMenuShow");
  VanzGame.classList.add("VanzGameShow");
}
function OpenGalery() {
  klik.play();
  window.location.replace("galery/");
}
// Link

function OpenSpotify() {
  klik.play();
  window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=8580e4c5b3be448d");
}

/// Var Audio's ///

var klik = new Audio("https://editor-miring-squad.netlify.app/am/mix/klik.mp3");
klik.loop = false;
klik.autoplay = false;

var BacksoundMusic = new Audio("https://editor-miring-squad.netlify.app/mix/mk-song-1.mp3");
BacksoundMusic.loop = false;
BacksoundMusic.autoplay = false;

function OpenIg() {
  klik.play();
  window.location.replace("https://instagram.com/marchell_kevandra");
}
function OpenSteam() {
  klik.play();
  window.location.replace("https://steamcommunity.com/profiles/76561198858660119/");
}
function OpenFb() {
  klik.play();
  window.location.replace("https://facebook.com/chellgnzxz");
}
function OpenTiktok() {
  klik.play();
  window.location.replace("https://tiktok.com/@mkxchl");
}
function OpenProfilSpotify() {
  klik.play();
  window.location.replace("https://open.spotify.com/user/31ubcol5qj4y6mu3ifoxqbjgzpma?si=c48b3b26de694129");
}
function VanzXLoad() {
  setTimeout(function () {
    VanzXNavMusic.classList.add("VanzXNavMusicShow");
    IconMusic.className = MuteVolume;
  }, 1000);
}
function PlayMusic() {
  IconMusic.className = FullVolume;
  BacksoundMusic.play();
  VanzXNavMusic.classList.remove("VanzXNavMusicShow");
  BodyX.classList.add("DarkVanz");
  snowflakesSnow.classList.add("SnowShow");
  VanzXCardThumb.style.backgroundImage = "url ('https://editor-miring-squad.netlify.app/assets/images/xchl.jpg')";
}


snowflakes.forEach(snowflake => {
    const randomX = Math.random() * 100; // Posisi horizontal acak
    const randomDuration = Math.random() * 3 + 2; // Durasi acak antara 2-5 detik
    const randomDelay = Math.random() * 5; // Delay acak

    snowflake.style.left = `${randomX}vw`;
    snowflake.style.animationDuration = `${randomDuration}s`;
    snowflake.style.animationDelay = `${randomDelay}s`;
});
BacksoundMusic.onended = function() {
  IconMusic.className = MuteVolume;
  VanzXNavMusic.classList.add("VanzXNavMusicShow");
}