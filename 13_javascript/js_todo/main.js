const taskValue = document.getElementsByClassName("task_value")[0];
const taskSubmit = document.getElementsByClassName("task_submit")[0];
const taskList = document.getElementsByClassName("task_list")[0];

const reloadTaskStatus = () => {
  const tasksCount = taskList.childElementCount;
  const checkboxArr = taskList.children ?? [];
  let checkboxCount = 0;
  for (let i = 0; i < checkboxArr.length; i++) {
    checkboxArr[i].children[0].children[0].checked && checkboxCount++;
  }
  const taskStatusMessage = `全てのタスク：${tasksCount} 完了済み：${checkboxCount} 未完了：${
    tasksCount - checkboxCount
  }`;
  document.getElementById("task_status").innerHTML = taskStatusMessage;
};

reloadTaskStatus();

const addTasks = (task) => {
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    reloadTaskStatus();
  });

  listItem.append(label);
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(`${task}`));

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
  reloadTaskStatus();

  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    deleteTasks(deleteButton);
    reloadTaskStatus();
  });
};

const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest("li");
  taskList.removeChild(chosenTask);
};

taskSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = "";
});
