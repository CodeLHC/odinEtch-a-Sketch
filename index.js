const container = document.getElementById("container");
const slider = document.getElementById("slider");
const sliderNumber = document.getElementById("sliderNumber");
const updateGridBtn = document.getElementById("updateGridBtn");
const magicButton = document.getElementById("useMagicPen");
const basicButton = document.getElementById("useBasicPen");

const DEFAULT_COLOR = "black";
const MAGIC_COLOR = "magic";
let currentColor = DEFAULT_COLOR;

function createBox() {
  const div = document.createElement("div");
  div.classList.add("box");
  div.addEventListener("mouseenter", (e) => {
    if (e.target.matches(".box")) {
      if (currentColor === MAGIC_COLOR) {
        e.target.style.backgroundColor = randomRGB();
      } else if (currentColor === DEFAULT_COLOR)
        e.target.style.backgroundColor = DEFAULT_COLOR;
    }
  });
  return div;
}

const randomColorValue = () => Math.floor(Math.random() * 256);

function randomRGB() {
  const r = randomColorValue();
  const g = randomColorValue();
  const b = randomColorValue();
  return `rgb(${r}, ${g}, ${b}`;
}

function generateRow(gridNumber) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 1; i <= gridNumber; i++) {
    row.appendChild(createBox(gridNumber));
  }
  return row;
}

function createGrid(gridNumber) {
  for (let i = 1; i <= gridNumber; i++) {
    container.appendChild(generateRow(gridNumber));
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function setSlider() {
  sliderNumber.innerText = slider.value;
}

slider.addEventListener("input", () => {
  setSlider();
});

updateGridBtn.addEventListener("click", () => {
  removeAllChildNodes(container);
  createGrid(slider.value);
});

magicButton.addEventListener("click", () => {
  currentColor = MAGIC_COLOR;
});

basicButton.addEventListener("click", () => {
  currentColor = DEFAULT_COLOR;
});

createGrid(16);
setSlider();
