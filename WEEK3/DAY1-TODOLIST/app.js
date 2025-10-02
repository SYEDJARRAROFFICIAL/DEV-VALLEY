let tasks = [];
document.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    storedTasks.forEach((task) => tasks.push(task));
    updateTasksList();
    updateStats();
  }
});

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();
  if (text) {
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    tasks.push(task);

    console.log(tasks);
    // renderTasks();
    updateTasksList();
    updateStats();
    saveTasks();
    taskInput.value = "";
  }
};

const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList();
  updateStats();
  saveTasks();
};
const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTasksList();
  updateStats();
  saveTasks();
};
const editTask = (index) => {
  const taskInput = document.getElementById("taskInput");
  taskInput.value = tasks[index].text;

  tasks.splice(index, 1);
  updateTasksList();
  // updateStats();
  saveTasks();
};

const updateStats = () => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  const progressBar = document.getElementById("progress");

  // progressBar.style.width = `${ progress } %;
  progressBar.style.width = progress + "%";

  document.getElementById(
    "numbers"
  ).innerHTML = `${completedTasks} / ${totalTasks}`;

  if (tasks.length && completedTasks === totalTasks) {
    blaskConfetti();
  }
};

const updateTasksList = () => {
  const tasksList = document.getElementById("task-list");

  tasksList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    // listItem.textContent = task.text;

    listItem.innerHTML = `
    <div class="taskItem ">
        <div class="task ${task.completed ? "completed" : ""}">
            <input type="checkbox"  class="checkbox" ${
              task.completed ? "checked" : ""
            } />
            <p>${task.text}</p>
        </div>
        <div class="icons">
            <img src="./assets/edit.png" alt="Check" onClick="editTask(${index})"  />
            <img src="./assets/bin.png" alt="Delete" onClick="deleteTask(${index})" />
        </div>
    </div>
      `;
    listItem.addEventListener("change", (e) => {
      if (e.target.classList.contains("checkbox")) {
        toggleTaskComplete(index);
      }
    });

    tasksList.appendChild(listItem);
  });
};

document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});

const blaskConfetti = () => {
  const duration = 5 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};
