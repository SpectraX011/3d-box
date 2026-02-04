const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
    }
  }
}

createBoxes();
