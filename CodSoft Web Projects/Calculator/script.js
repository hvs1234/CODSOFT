const screen = document.querySelector("#display");
const btn = document.querySelectorAll("button");

btn.forEach((data) => {
  data.onclick = () => {
    if (data.id == "clear") screen.innerText = "";
    else if (data.id == "backspace") {
      let string = screen.innerText.toString();
      screen.innerText = string.substr(0, string.length - 1);
    } 
    else if (screen.innerText != "" && data.id == "equal") {
      screen.innerText = eval(screen.innerText);
    } 
    else if (screen.innerText == "" && data.id == "equal") {
      screen.innerText = "Empty!";
      setTimeout(() => (screen.innerText = ""), 2000);
    } 
    else {
      screen.innerText += data.id;
    }
  };
});

const theme_btn = document.querySelector(".theme-click");
const calculate = document.querySelector(".calculator");
const Icon = document.querySelector(".icon");
let isDark = true;
theme_btn.onclick = () => {
  calculate.classList.toggle("dark");
  theme_btn.classList.toggle("active");
  isDark = !isDark;
};
