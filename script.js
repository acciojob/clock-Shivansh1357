//your JS code here. If required.
function updateTime() {
      var now = new Date();
      var timer = document.getElementById("timer");
      timer.innerHTML = now.toLocaleString();
    }

    // Call updateTime function every second (1000 milliseconds)
    setInterval(updateTime, 1000);