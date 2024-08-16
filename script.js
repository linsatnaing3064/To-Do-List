let tasksList = [];
let categoriesList = [];

function addTask() {
  let task_name = document.getElementById("addTask").value;
  let task_date = document.getElementById("taskDate").value;
  let task_description = document.getElementById("taskDescription").value;
  let task_category = document.getElementById("categoriesList").value;
  let Tasks = {
    taskChecked: false,
    taskName: task_name,
    taskDate: task_date,
    taskDescription: task_description,
    taskCategory: task_category,
  };
  tasksList.push(Tasks);
  sessionStorage.setItem("tasksList", JSON.stringify(tasksList));
  location.reload();
}

function addCategory() {
  let category = document.getElementById("addCategory").value;
  categoriesList.push(category);
  sessionStorage.setItem("categoriesList", JSON.stringify(categoriesList));
  location.reload();
}

if (sessionStorage.getItem("tasksList")) {
  let task_array = JSON.parse(sessionStorage.getItem("tasksList"));
  tasksList.push(...task_array);
  let tasks_list = document.getElementById("tasks-list");
  for (let x = 0; x < tasksList.length; x++) {
    let checked = "";
    if (tasksList[x].taskChecked == true) {
      checked = "checked";
    }
    tasks_list.innerHTML += `
      <li class="task-item">
          <input type="checkbox" name="taskCheck" onclick="taskCheck(${x})" id="taskCheck" ${checked}>
          <div class="task-and-date">
              <h4 class="task-name ${checked}">${tasksList[x].taskName}</h4>
              <p class="task-date ${checked}">${tasksList[x].taskDate}</p>
          </div>
          <h4 class="category-name ${checked}">${tasksList[x].taskCategory}</h4>
          <button class="task-delete ${checked}" onclick="taskDelete(${x})"><i class="fa-solid fa-trash-can"></i></button>
      </li>
    `;
  }
}

if (sessionStorage.getItem("categoriesList")) {
  let cate_array = JSON.parse(sessionStorage.getItem("categoriesList"));
  categoriesList.push(...cate_array);
  let category_list = document.getElementById("category-list");
  let taskCategory = document.getElementById("categoriesList");
  for (let x = 0; x < categoriesList.length; x++) {
    category_list.innerHTML += `
        <li class="category-item">
            <h4 class="category-name">${categoriesList[x]}</h4>
            <button class="task-delete" onclick="cateDelete(${x})"><i class="fa-solid fa-trash-can"></i></button>
        </li>
    `;
    taskCategory.innerHTML += `
        <option value="${categoriesList[x]}">${categoriesList[x]}</option>
    `;
  }
}

function taskDelete(x) {
  tasksList.splice(x, 1);
  sessionStorage.setItem("tasksList", JSON.stringify(tasksList));
  location.reload();
}

function cateDelete(x) {
  categoriesList.splice(x, 1);
  sessionStorage.setItem("categoriesList", JSON.stringify(categoriesList));
  location.reload();
}

function taskCheck(x) {
  let task_check = document.getElementById("taskCheck");
  if (task_check.checked == true) {
    tasksList[x].taskChecked = true;
    sessionStorage.setItem("tasksList", JSON.stringify(tasksList));
    location.reload();
  } else {
    tasksList[x].taskChecked = false;
    sessionStorage.setItem("tasksList", JSON.stringify(tasksList));
    location.reload();
  }
}
