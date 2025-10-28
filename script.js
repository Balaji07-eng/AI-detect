function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const list = document.getElementById("taskList");

  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
}
