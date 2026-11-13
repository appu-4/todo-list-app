// ==========================================================
// 1. SELECT DOM ELEMENTS
// ==========================================================
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// ==========================================================
// 2. STORAGE HELPERS
// ==========================================================

/**
 * Saves all current tasks in the DOM into browser localStorage.
 */
function saveTasks() {
  const tasks = [];
  const listItems = taskList.querySelectorAll("li");

  listItems.forEach((li) => {
    const textSpan = li.querySelector("span");
    if (textSpan) {
      tasks.push({
        text: textSpan.textContent,
        completed: li.classList.contains("completed"),
      });
    }
  });

  // Convert array to a JSON string and store it
  localStorage.setItem("todo_tasks", JSON.stringify(tasks));
}

/**
 * Restores tasks from localStorage when the app loads.
 */
function loadTasks() {
  const savedData = localStorage.getItem("todo_tasks");

  // Requirement 6: Handle empty storage gracefully without errors
  if (!savedData) {
    return;
  }

  try {
    // Convert JSON string back into a JavaScript array
    const tasks = JSON.parse(savedData);

    if (Array.isArray(tasks)) {
      tasks.forEach((task) => {
        const li = createTaskElement(task.text, task.completed);
        taskList.appendChild(li);
      });
    }
  } catch (error) {
    console.error("Error reading tasks from localStorage:", error);
  }
}

// ==========================================================
// 3. UI ELEMENT CREATION
// ==========================================================

/**
 * Creates and returns a complete <li> element for a task.
 * @param {string} taskText - The description of the task.
 * @param {boolean} isCompleted - Whether the task is already completed.
 */
function createTaskElement(taskText, isCompleted = false) {
  const li = document.createElement("li");
  li.style.cursor = "pointer";

  // Mark completed if previously saved as completed
  if (isCompleted) {
    li.classList.add("completed");
  }

  // Create text container
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  textSpan.style.flex = "1";
  textSpan.style.marginRight = "12px";

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.title = "Delete task";
  deleteBtn.setAttribute("aria-label", "Delete task");

  // Style the delete button
  deleteBtn.style.background = "none";
  deleteBtn.style.border = "none";
  deleteBtn.style.color = "#e53e3e";
  deleteBtn.style.fontSize = "16px";
  deleteBtn.style.fontWeight = "bold";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.padding = "4px 8px";
  deleteBtn.style.borderRadius = "4px";
  deleteBtn.style.textDecoration = "none";
  deleteBtn.style.transition = "background-color 0.2s";

  // Hover effect for delete button
  deleteBtn.addEventListener("mouseenter", () => {
    deleteBtn.style.backgroundColor = "#fed7d7";
  });
  deleteBtn.addEventListener("mouseleave", () => {
    deleteBtn.style.backgroundColor = "transparent";
  });

  // Requirement 3: Toggle completed state & save changes to localStorage
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  // Requirement 4: Delete task & save changes to localStorage
  deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent toggling completed when deleting
    li.remove();
    saveTasks();
  });

  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  return li;
}

// ==========================================================
// 4. USER ACTION: ADD NEW TASK
// ==========================================================

function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent adding empty tasks
  if (taskText === "") {
    alert("Please enter a task before adding!");
    return;
  }

  // Create task element, insert it, and save to storage
  const li = createTaskElement(taskText, false);
  taskList.appendChild(li);

  // Requirement 1: Save tasks automatically when a new task is added
  saveTasks();

  // Reset input field
  taskInput.value = "";
  taskInput.focus();
}

// ==========================================================
// 5. EVENT LISTENERS & INITIALIZATION
// ==========================================================

// Click "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Press "Enter" key in the input box
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Requirement 2 & 5: Restore saved tasks on startup / refresh
loadTasks();
