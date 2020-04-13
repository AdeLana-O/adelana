const darkMode = (theme, iconName, elemClass) => {
  const darkModeIcon = document.getElementById("dark-mode-icon");
  const icon = darkModeIcon.firstChild;

  darkModeIcon.className = theme;
  setTimeout(() => icon.className = iconName, 300);
  document.documentElement.className = elemClass;
}

const setCookie = (str) => {
  const expireDate = Date.now() + (365 * 24 * 60 * 60 * 1000);
  const d = new Date(expireDate);

  document.cookie = `theme=${str};expires=${d};path=/`;
}

const getCookie = (str) => {
  const theme = document.cookie;
  const arr = theme.split("=");

  if (arr[0] === str && arr[1] === "dark") {
    darkMode("dark", "fas fa-moon", "dark-mode");
  }
}

export { darkMode, setCookie, getCookie }
