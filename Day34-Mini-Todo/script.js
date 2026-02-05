function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  let del = document.createElement("button");
  del.innerText = "X";
  del.onclick = () => li.remove();

  li.appendChild(del);
  document.getElementById("list").appendChild(li);

  input.value = "";
}
