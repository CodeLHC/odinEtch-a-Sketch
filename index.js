const container = document.getElementById("container");

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("box");
  return div;
}

function createGrid(gridNumber) {
  const gridArea = gridNumber * gridNumber;
  for (let i = 0; i <= gridArea + gridNumber; i++) {
    container.appendChild(createDiv(container.clientWidth / gridNumber));
  }
}
createGrid(16);
