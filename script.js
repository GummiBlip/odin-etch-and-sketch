let container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
  let subContainer = document.createElement("div");
  subContainer.classList.add("rowContainer");
  container.appendChild(subContainer);
  for (j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.classList.add("gridBox");
    subContainer.appendChild(div);
  }

}