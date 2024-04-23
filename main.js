function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Update time elements in the HTML
    document.querySelector('[data-time="hours"]').textContent = hours;
    document.querySelector('[data-time="minutes"]').textContent = minutes;
    document.querySelector('[data-time="seconds"]').textContent = seconds;
  }
  updateClock();
  
  setInterval(updateClock, 1000);
