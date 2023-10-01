// (a) Create an array of strings.
const tasksArray = ["Task 1", "Task 2", "Task 3"];

// (b) Create an addTask function.
const addTask = (task) => {
  tasksArray.push(task);
  console.log(`Task "${task}" added successfully.`);
  return tasksArray.length;
};

// (c) Create a listAllTasks function.
const listAllTasks = () => {
  tasksArray.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
};

// (d) Create a deleteTask function.
const deleteTask = (task) => {
  const index = tasksArray.indexOf(task);
  if (index !== -1) {
    tasksArray.splice(index, 1);
    console.log(`Task "${task}" deleted successfully.`);
  } else {
    console.log(`Task "${task}" not found.`);
  }
  return tasksArray.length;
};

// Example usage:
console.log(addTask("New Task"));
listAllTasks();
console.log(deleteTask("Task 2"));
listAllTasks();
