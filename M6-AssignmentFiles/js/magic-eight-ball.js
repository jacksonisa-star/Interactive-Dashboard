// Put your JavaScript code in this file

let answers = [
    "Yes",
    "No",
    "Maybe",
    "Definitely",
    "Ask again later",
    "It is likely",

];

function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    document.getElementById("circle").style.display = "block";
    document.getElementById("circle").innerHTML = answers[index];
}

document.getElementById("ball").addEventListener("mousedown", function() {
    if (document.getElementById("question").value =="") {
        alert("Please enter a question.");
    } else {
        displayAnswer();
    }
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});