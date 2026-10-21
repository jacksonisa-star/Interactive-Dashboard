let myTasks = [];

console.log("Task manager loaded");

function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Calculate weekly goal
    let weeklyGoal = dailyGoal * 5;

    // Add bonusTasks to weeklyGoal.
    let totalGoal = weeklyGoal + bonusTasks;

    // Create the output
    let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

    //Display the output
    document.getElementById("goal-message").innerHTML = output;
}

// Get the values when the button is clicked
document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();
    // Get the values entered by the user
    let userName = document.getElementById("userName").value;
    let dailyGoal = Number(document.getElementById("dailyGoal").value);
    let bonusTasks = Number(document.getElementById("bonusTasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

// Get the task list, task input, and Add Task button from the HTML
let taskList = document.getElementById("task-list");
let taskName = document.getElementById("task-name");
let addTask = document.getElementById("add-task");

// Create a new unordered list for the user's tasks
let userTaskList = document.createElement("ul");

// Give the new unordered list a unique ID
userTaskList.id = "user-tasks";

// Add the unordered list to the task-list div
taskList.appendChild(userTaskList);

// Add a task as an object and display it using a DOM node
function addNewTask() {
    let task = {
        id: Date.now(),
        name: taskName.value,
        priority: document.getElementById("task-priority").value,
        isImportant: document.getElementById("task-important").checked,
        isCompleted: false
    };

    // Store the task object in the array
    myTasks.push(task);

    // Create a new list item for the task
    let listItem = document.createElement("li");

    // Create a seperate DOM node for the task text
    let taskText = document.createElement("span");
    taskText.textContent = task.name + " - " + task.priority;
    listItem.appendChild(taskText);
    // Highlight important tasks in red
    if (task.isImportant) {
        listItem.style.color = "red";
    }

    // Create a complete button using a DOM node
    let completeButton = document.createElement("button");
    completeButton.type = "button";
    completeButton.textContent = "Complete";

    // Mark this task complete when the button is clicked
    completeButton.addEventListener("click", function() {
        markTaskComplete(task, taskText);
    });

    // Add the complete button to the list item
    listItem.appendChild(completeButton);
    // Add the new task to the unordered list
    userTaskList.appendChild(listItem);

    // Log the full task list
    console.log(JSON.stringify(myTasks));
}
function markTaskComplete(task, taskText) {
    task.isCompleted = true;
    taskText.style.textDecoration = "line-through";

    // Log the updated task list
    console.log(JSON.stringify(myTasks));
}

// Call the add-task function when the button is clicked
addTask.addEventListener("click", function(event) {
    event.preventDefault();
    addNewTask();
});
// Remove all tasks from the array and the webpage
function deleteTaskList() {
    myTasks = [];
    userTaskList.textContent = "";

    // Log the empty task list
    console.log(JSON.stringify(myTasks));
}

// Run the function when Delete List is clicked
document.getElementById("delete-list").addEventListener("click", function() {
    deleteTaskList();
});
