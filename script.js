var newTask = document.getElementById("new-task");
var addTaskButton = document.getElementById("add-task-btn");
var incompleteTasks = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");

addTaskButton.addEventListener("click", addTask);

function createTaskElement(task) {
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    listItem.className = "task-item";
    checkbox.type = "checkbox";
    label.innerText = task;

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            listItem.classList.add("completed");
            completedTasks.appendChild(listItem);
        } else {
            listItem.classList.remove("completed");
            incompleteTasks.appendChild(listItem);
        }
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

function addTask() {
    var task = newTask.value.trim();
    if (task !== "") {
        incompleteTasks.appendChild(createTaskElement(task));
        newTask.value = "";
    }
}
