


// del slider

function imgSlider(anything)
{
    document.querySelector('.starmotitas').src= anything
}

function changeCircleColor  (color)
{
    const circle = document.querySelector('.circle')
    circle.style.background = color;
}
function changetext (color)
{
    document.querySelector('.textocolor').src = anything
    span.style.color = color
}

//chambeando ando en la calculadora

const display = document.querySelector("#display");
const botones = document.querySelectorAll("button");

botones.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "igual") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "igual") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".tema-mostrar");
const calculadora = document.querySelector(".calculadora");
const toggleIcon = document.querySelector(".icono-tema");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculadora.classList.toggle("oscura");
  themeToggleBtn.classList.toggle("activo");
  isDark = !isDark;
};