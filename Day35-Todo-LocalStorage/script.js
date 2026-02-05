let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;

    let del = document.createElement("button");
    del.innerText = "X";
    del.onclick = () => {
      tasks.splice(index, 1);
      save();
    };

    li.appendChild(del);
    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value === "") return;

  tasks.push(input.value);
  input.value = "";
  save();
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

render();
