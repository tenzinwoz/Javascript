const inputEle = document.getElementById("input");
inputEle.addEventListener("input", (e) => {
  document.getElementById("output").innerText = e.target.value;
});

let count = 0;
const buttonEle = document.getElementById("addButton");
buttonEle.addEventListener("click", () => {
  count = count + 1;
  document.getElementById("addValue").innerText = count;
});
