function getSize() {
  let size = prompt("Please enter a grid size");
  return size;
}

function generateGrid(squareCount, containerSize) {
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

function validateSize() {
  roundsToPlay = Math.floor(document.querySelector("#rounds").value);
  if (!isNaN(roundsToPlay) && roundsToPlay >= 1 && roundsToPlay <= 99) {
    return true;
  } else {
    updateInfo("Please enter a valid number of rounds.");
    roundsToPlay = 5;
    return false;
  }
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

