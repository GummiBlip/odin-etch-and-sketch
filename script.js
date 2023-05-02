let container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
  let div = document.createElement("div");
  div.classList.add("gridBox");
  container.appendChild(div);
}