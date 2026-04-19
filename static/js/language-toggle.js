document.addEventListener("DOMContentLoaded", function () {
  // Only add language toggle if quick navigation buttons are enabled and multiple languages exist
  const buttonContainer = document.getElementById("button-container");
  if (!buttonContainer) return;

  // Check if we have multiple languages (Portuguese and English)
  const currentLang = document.documentElement.lang;
  const currentPath = window.location.pathname;

  let targetUrl, currentLangText, targetLangText, currentLangTitle;

  if (currentLang === "en") {
    // Current page is in English
    if (currentPath === "/") {
      targetUrl = "/pt/";
    } else {
      targetUrl = "/pt" + currentPath;
    }
    currentLangText = "EN";
    targetLangText = "Mudar para Português";  // In Portuguese
    currentLangTitle = "Current language: English";
  } else if (currentLang === "pt") {
    // Current page is in Portuguese
    targetUrl = currentPath.replace(/^\/pt\//, "/").replace(/^\/pt$/, "/");
    currentLangText = "PT";
    targetLangText = "Switch to English";  // In English
    currentLangTitle = "Idioma atual: Português";
  } else {
    return; // Unknown language, don't add button
  }

  // Create the language toggle container (similar to TOC)
  const languageContainer = document.createElement("div");
  languageContainer.id = "language-floating-container";

  // Create the checkbox toggle
  const toggleCheckbox = document.createElement("input");
  toggleCheckbox.type = "checkbox";
  toggleCheckbox.id = "language-toggle";
  toggleCheckbox.className = "toggle";

  // Create the overlay
  const overlay = document.createElement("label");
  overlay.setAttribute("for", "language-toggle");
  overlay.className = "overlay";

  // Create the button
  const languageButton = document.createElement("label");
  languageButton.setAttribute("for", "language-toggle");
  languageButton.id = "language-button";
  languageButton.className = "button";
  languageButton.title = currentLangTitle;

  // Create the language code span
  const languageSpan = document.createElement("span");
  languageSpan.className = "language-code";
  languageSpan.textContent = currentLangText;

  languageButton.appendChild(languageSpan);

  // Create the content div with the switch option
  const contentDiv = document.createElement("div");
  contentDiv.className = "language-content";

  const switchLink = document.createElement("a");
  switchLink.href = targetUrl + window.location.search + window.location.hash;
  switchLink.textContent = targetLangText;  // Already contains the full text in the target language
  switchLink.className = "language-switch-link";

  contentDiv.appendChild(switchLink);

  // Assemble the container
  languageContainer.appendChild(toggleCheckbox);
  languageContainer.appendChild(overlay);
  languageContainer.appendChild(languageButton);
  languageContainer.appendChild(contentDiv);

  // Insert the language container before the "go to top" button
  const topButton = document.getElementById("top-button");
  if (topButton) {
    buttonContainer.insertBefore(languageContainer, topButton);
  } else {
    buttonContainer.appendChild(languageContainer);
  }
});
