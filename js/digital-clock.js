function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert to 12-hour time.
    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros.
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    const time = hours + ":" + minutes + ":" + seconds + " " + session;
    const date = now.toLocaleDateString();

    document.getElementById("clock-face").innerHTML = time;
    document.getElementById("calendar-date").innerHTML = date;
}

updateClock();
setInterval(updateClock, 1000);