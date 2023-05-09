function getSize() {
  let size = prompt("Please your desired number of squares per side of the canvas. It must be at least 1 and cannot be more than 100.");
  return size;
}

function generateGrid(squareCount, containerSize) {
  squareCount = validateSize(squareCount);
  resetColorData();
  for (rowNumber = 0; rowNumber < squareCount; rowNumber++) {
    let subContainer = document.createElement("div");
    subContainer.classList.add("rowContainer");
    container.appendChild(subContainer);
    for (columnNumber = 0; columnNumber < squareCount; columnNumber++) {
      let div = document.createElement("div");
      div.style.width = `${ (1/squareCount) * containerSize}px`;
      div.style.height = `${ (1/squareCount) * containerSize}px`;
      div.classList.add("gridBox");
      div.setAttribute("id",`${rowNumber + 1}-${columnNumber + 1}`)
      div.addEventListener("mouseover", changeColor)
      subContainer.appendChild(div);
    }
  }
}

function changeColor() {
  if (Array.from(this.classList).includes("painted")) {
    darken(this);
  } else {
    let newColor = getRandomRGB();
    this.style.backgroundColor = newColor;
    this.classList.add("painted");
    colorData[this.id] = newColor;
  }
  
}

function resetColorData() {
  colorData = {};
}

function darken(squareDiv) {
  let currentRGBValues = splitRGBValues(squareDiv.style.backgroundColor);
  let originalRGBValues = splitRGBValues(colorData[squareDiv.id]);
  let newRGBValues = [];
  for (let colorNumber = 0; colorNumber < 3; colorNumber++) {
    newRGBValues[colorNumber] = +currentRGBValues[colorNumber] - +(originalRGBValues[colorNumber] / 10);
  }
  let newRGBString = getRGBString(newRGBValues);
  squareDiv.style.backgroundColor = newRGBString;
}

function getRGBString(rgbValueArray) {
  let red = rgbValueArray[0];
  let green = rgbValueArray[1];
  let blue = rgbValueArray[2];
  return `rgb(${red}, ${green}, ${blue})`;
}

function splitRGBValues(rgbString) {
  let splitValues = rgbString.split("(")[1].split(")")[0].split(",");
  let trimmed = splitValues.map(value => value.trim());
  return trimmed;
}

function getRandomRGB() {
  let red = (Math.floor(Math.random() * 255));
  let green = (Math.floor(Math.random() * 255));
  let blue = (Math.floor(Math.random() * 255));
  return getRGBString([red, green, blue]);
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
let colorData = {};

promptButton.addEventListener("click", () => { clearGrid(); generateGrid(getSize(), canvasSize); });

generateGrid(initialSquares, canvasSize);

