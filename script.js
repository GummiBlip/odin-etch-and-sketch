function getSize() {
  let size = prompt("Please your desired number of squares per side of the canvas. It must be at least 1 and cannot be more than 100.");
  return size;
}

function generateGrid(squareCount, containerSize) {
  squareCount = validateSize(squareCount);
  for (i = 0; i < squareCount; i++) {
    let subContainer = document.createElement("div");
    subContainer.classList.add("rowContainer");
    container.appendChild(subContainer);
    for (j = 0; j < squareCount; j++) {
      let div = document.createElement("div");
      div.style.width = `${ (1/squareCount) * containerSize}px`;
      div.style.height = `${ (1/squareCount) * containerSize}px`;
      div.classList.add("gridBox");
      div.addEventListener("mouseover", () => {div.style.backgroundColor = "red";})
      subContainer.appendChild(div);
    }
  }
}

function validateSize(sizeString) {
  size = Math.floor(sizeString);
  if (!isNaN(size) && size >= 1 && size <= 100) {
    return size;
  } return 64;
}

function clearGrid() {
  for (node of document.querySelectorAll(".rowContainer")) {
    node.remove();
  }
}

let container = document.querySelector("#gridContainer");
let promptButton = document.querySelector("#sizeButton");
let initialSquares = 64;
let canvasSize = 960;

promptButton.addEventListener("click", () => { clearGrid(); generateGrid(getSize(), canvasSize); });

generateGrid(initialSquares, canvasSize);

