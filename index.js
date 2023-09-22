const container = document.getElementById("container");
const slider = document.getElementById("slider");
const sliderNumber = document.getElementById("sliderNumber");
const updateGridBtn = document.getElementById("updateGridBtn");

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("box");
  div.addEventListener("mouseenter", (e) => {
    if (e.target.matches(".box")) {
      e.target.classList.add("active");
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

// Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

// Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.
