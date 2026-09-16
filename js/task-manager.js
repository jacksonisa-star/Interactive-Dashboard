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
    let userName = document.getElementById("userName").value;
    let dailyGoal = Number(document.getElementById("dailyGoal").value);
    let bonusTasks = Number(document.getElementById("bonusTasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});
