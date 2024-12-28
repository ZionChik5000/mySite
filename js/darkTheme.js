const bodyElement = document.getElementsByTagName("body")[0];
const divElements = document.getElementsByTagName("div");
const pElements = document.getElementsByTagName("p");
const h1Elements = document.getElementsByTagName("h1");
const footerElement = document.getElementsByTagName("footer")[0];
const pageLinkElements = document.getElementsByClassName("page-link");
const welcomeTitleElement = document.getElementById("welcome-title");

const lightIcon = document.getElementById("light-theme-btn");
const darkIcon = document.getElementById("dark-theme-btn");

let currentTheme = localStorage.getItem("theme") || "light";

applyTheme();
updateIcons();

function changeTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";

  localStorage.setItem("theme", currentTheme);
  applyTheme();
  updateIcons();
}

function applyTheme() {
  if (currentTheme === "light") {
    bodyElement.style.backgroundImage =
      "linear-gradient(180deg, #602d44 0%, #2f4454 35%, #254352 100%)";
    bodyElement.style.backgroundColor = "";
    footerElement.style.backgroundImage = "";

    Array.from(divElements).forEach((div) => {
      div.style.backgroundColor = "white";
    });

    Array.from(pElements).forEach((p) => {
      p.style.color = "black";
    });

    Array.from(h1Elements).forEach((h1) => {
      h1.style.color = "black";
    });

    Array.from(pageLinkElements).forEach((link) => {
      link.style.color = "#ff3f4f";
      link.style.backgroundColor = "#ffcdd1";
    });

    welcomeTitleElement.style.backgroundColor = "#dc617f";
  } else {
    bodyElement.style.backgroundImage = "none";
    bodyElement.style.backgroundColor = "#404040";
    footerElement.style.backgroundImage = "none";

    Array.from(divElements).forEach((div) => {
      div.style.backgroundColor = "#1e1e1e";
    });

    Array.from(pElements).forEach((p) => {
      p.style.color = "#b3b3b3";
    });

    Array.from(h1Elements).forEach((h1) => {
      h1.style.color = "white";
    });

    Array.from(pageLinkElements).forEach((link) => {
      link.style.color = "#ffcdd1";
      link.style.backgroundColor = "#ff3f4f";

      link.addEventListener("mouseover", () => {
        link.style.color = "#ff3f4f";
        link.style.backgroundColor = "#ffcdd1";
      });

      link.addEventListener("mouseout", () => {
        link.style.color = "#ffcdd1";
        link.style.backgroundColor = "#ff3f4f";
      });
    });
  }
}

function updateIcons() {
  if (currentTheme === "light") {
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
  } else {
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  }
}
