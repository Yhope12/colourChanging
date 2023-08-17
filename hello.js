const body = document.getElementById("body");
const startBtn = document.getElementById("start");
const stopBtn = document.querySelector(".button-82-pushable");
const h2 = document.querySelector("h2");
const resetBtn = document.querySelector(".reset");

function change() {
  let x = Math.ceil(Math.random() * 256);
  let y = Math.ceil(Math.random() * 256);
  let z = Math.ceil(Math.random() * 256);
  let a = Math.random();
  return `rgba(${x}, ${y}, ${z}, ${a})`;
}
function interval() {
  difficulty = setInterval(() => {
    document.body.style.backgroundColor = change();
    h2.innerHTML = change();
  }, 1000);
}
startBtn.addEventListener("click", interval);
stopBtn.addEventListener("click", () => {
  clearInterval(difficulty);
});

resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffff";
  h2.innerHTML = "rgba( , , , )";
});
