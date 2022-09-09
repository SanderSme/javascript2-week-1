import "./style.css";

const toggleBtn = document.querySelector("button");
const themeVariable = localStorage.getItem("theme");

window.onload = function () {
  if (themeVariable && themeVariable === "dark") {
    document.querySelector("body").classList.add("bg-black");
  }
};

toggleBtn.onclick = function () {
  handleToggleBtn();
};

function handleToggleBtn() {
  console.log("clicked the button");
  if (themeVariable && themeVariable === "dark") {
    document.querySelector("body").classList.remove("bg-black");
    localStorage.removeItem("theme");
  } else {
    document.querySelector("body").classList.add("bg-black");
    localStorage.setItem("theme", "dark");
  }
}
