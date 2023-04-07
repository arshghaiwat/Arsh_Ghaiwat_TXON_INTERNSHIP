function addTask() {
  var task = document.getElementById("input-task").value;
  if (task === "") {
    alert("Please enter a task");
  } else {
    var ul = document.getElementById("task-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    document.getElementById("input-task").value = "";
    li.onclick = function () {
      li.classList.toggle("completed");
    };
  }
}
