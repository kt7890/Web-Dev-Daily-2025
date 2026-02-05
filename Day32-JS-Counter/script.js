let count = 0;

function increase() {
  count++;
  update();
}

function decrease() {
  count--;
  update();
}

function reset() {
  count = 0;
  update();
}

function update() {
  document.getElementById("count").innerText = count;
}
