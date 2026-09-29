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

// Get the task list; task input, and Add Task button from the HTML 
let taskList = document.getElementById("task-list");
let taskName = document.getElementById("task-name");
let addTask = document.getElementById("add-task");

// Create a new unordered list for the user's tasks 
let userTaskList = document.createElement("ul");

// Give the new unordered list a unique ID
userTaskList.id = "user-tasks";

// Add the unordered list to the task-list div
taskList.appendChild(userTaskList);

// Run the task manager code when the Add Task button is clicked
addTask.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the task entered by the user
    let task = taskName.value;

    // Add the task to the myTasks array
    myTasks.push(task);

    // Create a new list item for the task
    let listItem = document.createElement("li");

    // Display the user's task inside the new list item 
    listItem.innerHTML = task;

    // Add the new task to the unordered list
    userTaskList.appendChild(listItem);
    
});


