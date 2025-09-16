const addBtn = document.getElementById("add-task");

addBtn.addEventListener("click", () => {
  const title = document.getElementById("task-title").value;
  const desc = document.getElementById("task-desc").value;

  if (title.trim() === "") return;

  const task = document.createElement("div");
  task.classList.add("task");
  task.textContent = `${title} - ${desc}`;
  task.draggable = true;

  document.getElementById("todo-list").appendChild(task);

  document.getElementById("task-title").value = "";
  document.getElementById("task-desc").value = "";
});
