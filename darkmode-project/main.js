import "./style.css";

const toggleBtn = document.querySelector("button");
const themeVariable = localStorage.getItem("theme");

window.onload = function () {
  if (themeVariable && themeVariable === "dark") {
    document.querySelector("body").classList.toggle("bg-black");
  }
};

toggleBtn.onclick = function () {
  handleToggleBtn();
};

function handleToggleBtn() {
  if (themeVariable && themeVariable === "dark") {
    document.querySelector("body").classList.toggle("bg-black");
    localStorage.removeItem("theme");
  } else {
    document.querySelector("body").classList.toggle("bg-black");
    localStorage.setItem("theme", "dark");
  }
}
