let container = document.querySelector("#gridContainer");

for (i = 0; i < 16; i++) {
  let subContainer = document.createElement("div");
  subContainer.classList.add("rowContainer");
  container.appendChild(subContainer);
  for (j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.classList.add("gridBox");
    div.addEventListener("mouseover", () => {div.style.backgroundColor = "red";})
    subContainer.appendChild(div);
  }

}