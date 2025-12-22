// FIRST: Grab HTML elements using their IDs
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-button");
const todoList = document.getElementById("todo-list");

// TASK STORAGE LOGIC
// localStorage stores data as STRING only
// JSON.parse converts that string back into an array/object

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// Explanation:
// 1. localStorage.getItem("tasks") → gets saved tasks (string)
// 2. JSON.parse(...) → converts string → array
// 3. || [] → if nothing exists, use empty array

// LOOP THROUGH ALL SAVED TASKS (ON PAGE LOAD)
// forEach gives ONE task object at a time

tasks.forEach((task) => renderTasks(task));
// IMPORTANT FIX:
// Earlier we were passing the entire "tasks" array instead of
// a single "task" object, which caused "undefined" to appear

// EVENT LISTENER
// This runs when the Add button is clicked

addTaskButton.addEventListener("click", () => {
  // Get text from input field
  // .value → gets what user typed
  // .trim() → removes extra spaces from start and end

  const task1 = todoInput.value.trim();

  // If user entered nothing, stop execution
  // !task1 handles empty string cases correctly

  if (!task1) return;

  // Create a NEW task object
  // Object is used so each task has properties

  const newTask = {
    id: Date.now(),
    // Date.now() gives a unique number based on current time
    // used as ID so tasks can be uniquely identified later

    text: task1,
    // the actual task text user typed

    completed: false,
    // used later for marking task as done
  };

  // Add new task object into tasks array
  tasks.push(newTask);

  // Save updated tasks array to localStorage
  saveTasks();

  // Render ONLY the newly added task
  renderTasks(newTask);

  // Clear input field after adding task
  todoInput.value = "";

  // Log tasks array to console for debugging
  console.log(tasks);
});

// FUNCTION: renderTasks
// Purpose: display a single task on the screen

function renderTasks(task) {
  const li = document.createElement("li");

  // Store task ID on DOM element
  li.setAttribute("data-id", task.id);

  // If task is already completed (from localStorage),
  // apply Completed class on page load
  if (task.completed) li.classList.add("Completed");

  // Create task UI
  li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
  `;

  // Toggle completed state when clicking on task (not button)
  li.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;

    task.completed = !task.completed;
    li.classList.toggle("Completed");

    // IMPORTANT FIX:
    // saveTasks must be CALLED, not just referenced
    saveTasks();
  });

  // Delete button logic
  li.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    // stopPropagation prevents parent click (toggle) from firing

    // Remove task from array
    tasks = tasks.filter((t) => t.id !== task.id);

    // Remove task from DOM
    li.remove();

    // Save updated list
    saveTasks();
  });

  // Add task to the list in UI
  todoList.appendChild(li);
}

// FUNCTION: saveTasks
// Purpose: store tasks permanently in browser

function saveTasks() {
  // localStorage can store ONLY strings
  // JSON.stringify converts array → string

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
//FINISHEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

// DOM references
const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-button");
const todoList = document.getElementById("todo-list");

// Load persisted tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render saved tasks on load
tasks.forEach((task) => renderTasks(task));

addTaskButton.addEventListener("click", () => {
  const task1 = todoInput.value.trim();
  if (!task1) return;

  const newTask = {
    id: Date.now(),
    text: task1,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks(newTask);
  todoInput.value = "";
});

function renderTasks(task) {
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id);

  // Restore completed state
  if (task.completed) li.classList.add("Completed");

  li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
  `;

  // Toggle completion (excluding delete button)
  li.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;

    task.completed = !task.completed;
    li.classList.toggle("Completed");
    saveTasks();
  });

  // Delete task
  li.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    tasks = tasks.filter((t) => t.id !== task.id);
    li.remove();
    saveTasks();
  });

  todoList.appendChild(li);
}

// Persist tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
