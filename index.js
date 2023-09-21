const container = document.getElementById("container");
const slider = document.getElementById("slider");
const sliderNumber = document.getElementById("sliderNumber");

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
createGrid(50);

sliderNumber.innerHTML = slider.value;

slider.oninput = function () {
  sliderNumber.innerHTML = this.value;
};
