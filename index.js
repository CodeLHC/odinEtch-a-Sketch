const container = document.getElementById("container");
const slider = document.getElementById("slider");
const sliderNumber = document.getElementById("sliderNumber");
const updateGridBtn = document.getElementById("updateGridBtn");
const magicButton = document.getElementById("useMagicPen");
const basicButton = document.getElementById("useBasicPen");

const DEFAULT_COLOR = "black";
let currentColor = DEFAULT_COLOR;

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("box");
  div.addEventListener("mouseenter", (e) => {
    if (e.target.matches(".box")) {
      if (currentColor === "magic") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      } else if (currentColor === DEFAULT_COLOR)
        e.target.style.backgroundColor = DEFAULT_COLOR;
    }
  });
  return div;
}

function generateRow(gridNumber) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 1; i <= gridNumber; i++) {
    row.appendChild(createDiv(gridNumber));
  }
  return row;
}

function createGrid(gridNumber) {
  for (let i = 1; i <= gridNumber; i++) {
    container.appendChild(generateRow(gridNumber));
  }
}
createGrid(16);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

sliderNumber.innerHTML = slider.value;

slider.oninput = function () {
  sliderNumber.innerHTML = this.value;
};

updateGridBtn.addEventListener("click", () => {
  removeAllChildNodes(container);
  createGrid(slider.value);
});

magicButton.addEventListener("click", () => {
  currentColor = "magic";
});

basicButton.addEventListener("click", () => {
  currentColor = DEFAULT_COLOR;
});
