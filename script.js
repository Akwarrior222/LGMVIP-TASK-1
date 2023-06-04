function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
    
    if (taskInput.value === "") {
      return;
    }
    
    var li = document.createElement("li");
    li.innerHTML = taskInput.value + '<button class="delete-button" onclick="removeTask(this)">Delete</button>';
    
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  function removeTask(taskElement) {
    var li = taskElement.parentElement;
    li.remove();
  }
  