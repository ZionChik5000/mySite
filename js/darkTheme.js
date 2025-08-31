const body = document.body;
const footer = document.querySelector("footer");
const welcomeTitle = document.getElementById("welcome-title");

const lightIcon = document.getElementById("light-theme-btn");
const darkIcon = document.getElementById("dark-theme-btn");

const elements = {
  divs: [...document.getElementsByTagName("div")],
  paragraphs: [...document.getElementsByTagName("p")],
  headers: [...document.getElementsByTagName("h1")],
};

let currentTheme = localStorage.getItem("theme") || "light";

const themes = {
  light: {
    body: { backgroundImage: "linear-gradient(180deg, #602d44 0%, #2f4454 35%, #254352 100%)", backgroundColor: "" },
    footer: { backgroundImage: "" },
    divs: { backgroundColor: "white" },
    paragraphs: { color: "black" },
    headers: { color: "black" },
    welcomeTitle: { backgroundColor: "#dc617f" },
  },
  dark: {
    body: { backgroundImage: "none", backgroundColor: "#404040" },
    footer: { backgroundImage: "none" },
    divs: { backgroundColor: "#1e1e1e" },
    paragraphs: { color: "#b3b3b3" },
    headers: { color: "white" },
    welcomeTitle: {},
  },
};

function applyStyles(styles) {
  body.style.cssText = `background-image: ${styles.body.backgroundImage}; background-color: ${styles.body.backgroundColor || ""};`;
  footer.style.backgroundImage = styles.footer.backgroundImage || "";
  elements.divs.forEach((el) => (el.style.backgroundColor = styles.divs.backgroundColor));
  elements.paragraphs.forEach((el) => (el.style.color = styles.paragraphs.color));
  elements.headers.forEach((el) => (el.style.color = styles.headers.color));
  if (styles.welcomeTitle.backgroundColor) welcomeTitle.style.backgroundColor = styles.welcomeTitle.backgroundColor;
}

function updateIcons() {
  lightIcon.style.display = currentTheme === "light" ? "none" : "block";
  darkIcon.style.display = currentTheme === "light" ? "block" : "none";
}

function changeTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  applyStyles(themes[currentTheme]);
  updateIcons();
}

applyStyles(themes[currentTheme]);
updateIcons();
