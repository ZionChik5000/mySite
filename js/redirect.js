document.addEventListener("DOMContentLoaded", function () {
  const userLang = navigator.language || navigator.userLanguage;
  const allowedLanguages = ["ru", "uk"];

  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get("redirect");
  const bypass = urlParams.get("bypass") === "true";

  const isAllowed = allowedLanguages.some((lang) => userLang.startsWith(lang));

  if ((isAllowed || bypass) && redirectUrl) {
    window.location.href = redirectUrl;
  } else {
    document.getElementById("h1-text").textContent = "Link is currently unavailable.";
  }
});
