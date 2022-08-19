const calculator = document.querySelector("#calculator");
const mathAction = document.querySelector("#math-action");
const screen = document.querySelector("#result");
const themeBtn = document.getElementById("theme-btn");
const themeLink = document.getElementById("theme-link");
let memory = "";

calculator.addEventListener("click", function (ev) {
  if (!ev.target.classList.contains("button")) return;

  const value = ev.target.innerText;

  switch (value) {
    case "C":
      mathAction.innerText = '';
      screen.innerText = "";
      break;
    case "MC":
      memory = "";
      break;
    case "MR":
      screen.innerText = memory;
      break;
    case "M+":
      memory += eval(screen.innerText);
      break;
    case "M-":
      memory -= eval(screen.innerText);
      break;
    case "=":
      if (screen.innerText.search(/[^0-9*/+-.]/im) !== -1) return;
      mathAction.innerText = screen.innerText;
      screen.innerText = eval(screen.innerText);
      break;
    default:
      screen.innerText += value;
  }
});

themeBtn.addEventListener("click", function () {
  let lightTheme = "styles/light.css";
  let darkTheme = "styles/dark.css";

  let currentTheme = themeLink.getAttribute("href");
  let theme = "";

  if (currentTheme === lightTheme) {
    currentTheme = darkTheme;
    theme = "dark";
  } else {
    currentTheme = lightTheme;
    theme = "light";
  }

  themeLink.setAttribute("href", currentTheme);
});
