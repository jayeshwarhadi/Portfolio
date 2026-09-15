const root = document.documentElement;

function setToBlack() {
  root.style.setProperty("--themeBg", "black");
  root.style.setProperty("--themeClr", "white");
  root.style.setProperty("--footerBg", "rgb(5, 35, 11)");
  document.cookie = "theme=black; max-age=999999";
}
function setToWhite() {
  root.style.setProperty("--themeBg", "white");
  root.style.setProperty("--themeClr", "black");
  root.style.setProperty("--footerBg", "rgb(230, 240, 232)");
  document.cookie = "theme=white; max-age=999999";
}
function invertTheme(theme) {
  console.log(theme);
  if (theme === "black") {
    setToWhite();
  } else if (theme === "white") {
    setToBlack();
  }
}
function setTheme(theme) {
  console.log(theme);
  if (theme === "black") {
    setToBlack();
  } else if (theme === "white") {
    setToWhite();
  }
}

// finding and setting theme to black for first timers
let currentTheme = document.cookie
  .split("; ")
  .find((row) => row.startsWith("theme="))
  ?.split("=")[1];
if (!currentTheme) {
  document.cookie = "theme=black; max-age=999999";
  currentTheme = "black";
}
setTheme(currentTheme);

const themeButton = document.getElementById("themebtn");
themeButton.addEventListener("click", function () {
  invertTheme(currentTheme);
  currentTheme = currentTheme === "black" ? "white" : "black";
});
