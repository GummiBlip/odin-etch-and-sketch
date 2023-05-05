function getSize() {
  let size = prompt("Please enter a grid size");
  return size;
}

function generateGrid(gridSize, containerSize) {
  for (i = 0; i < gridSize; i++) {
    let subContainer = document.createElement("div");
    subContainer.classList.add("rowContainer");
    container.appendChild(subContainer);
    for (j = 0; j < gridSize; j++) {
      let div = document.createElement("div");
      div.style.width = `${ (1/gridSize) * containerSize}px`;
      div.style.height = `${ (1/gridSize) * containerSize}px`;
      div.classList.add("gridBox");
      div.addEventListener("mouseover", () => {div.style.backgroundColor = "red";})
      subContainer.appendChild(div);
    }
  }
}

function clearGrid() {
  for (node of document.querySelectorAll(".rowContainer")) {
    node.remove();
  }
}

let container = document.querySelector("#gridContainer");
let promptButton = document.querySelector("#sizeButton");
let initialGridSize = 64;
let canvasSize = 960;

promptButton.addEventListener("click", () => { clearGrid(); generateGrid(getSize(), canvasSize); });

generateGrid(initialGridSize, canvasSize);

