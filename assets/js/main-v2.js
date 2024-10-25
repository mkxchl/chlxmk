/// Button Card Body Active Function ///

const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const VanzNavMusic = document.querySelector(".VanzNavMusic");
const VanzNavMusicContent = document.querySelector(".VanzNavMusicContent");
const VanzNavMusicOverlay = document.querySelector(".VanzNavMusicOverlay");
const BarsContainer = document.querySelector(".bars");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#home" ? card.classList.add("is-active") : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

var VanzAudioxx = new Audio("https://mkxchl.github.io/vanz/assets/mix/Sycho.mp3");
VanzAudioxx.loop = false;
VanzAudioxx.autoplay = false;

var VanzAudioxxX = new Audio("https://mkxchl.github.io/vanz/assets/mix/TerekBalek.mp3");
VanzAudioxxX.loop = false;
VanzAudioxxX.autoplay = false;

VanzAudioxx.onended = function () {
  VanzAudioxxX.play();
  };

function VanzLoad() {
  setTimeout(function () {
    VanzNavMusic.classList.add("VanzNavMusicShow");
  }, 1000);
}
/// Dark Mode Function ///

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("open");
});

function mkAlert() {
  Swal.fire({
    icon: "error",
    title: "Sedang dalam perbaikan, Thanks!",
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  });
}
function playMyAudio() {
  document.getElementById("myAudio").play();
}

/// Function Link  ///

function mkMusic() {
  window.location.replace("https://www.google.com/search?q=Marchell+Kevandra");
}
function mkFacebook() {
  window.location.replace("https://www.facebook.com/marchel.ganz");
}
function mkInstagram() {
  window.location.replace("https://www.instagram.com/chellgnzxz_");
}
function mkTiktok() {
  window.location.replace("https://www.tiktok.com/mkxchl");
}
function mkWebsite() {
  window.location.replace("https://mk-links.netlify.app/");
}
function mkBucin() {
  window.location.replace("https://chl-bcn.netlify.app/");
}
function mkSoundcloud() {
  window.location.replace("https://soundcloud.com/marchellkevandra");
}
function mkHomesLink() {
  window.location.replace("/");
}
function mkNotif() {
  openFullscreen(), $(".card , .container , .hearts").fadeOut(500);
}

var textArray = ["Be your self", "Be carefull", "I Love Girl"];
var currentIndex = 0;
var currentText = "";

var interval = setInterval(function () {
  if (currentIndex == textArray.length) {
    currentIndex = 0;
  }
  currentText = textArray[currentIndex];
  document.getElementById("text-display").innerHTML = currentText;
  currentIndex++;
}, 2000);