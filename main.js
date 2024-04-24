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

  /* change images*/
 var myImage = document.querySelector("#galleryImage");

 function changeImage1(params) {
  myImage.src = "/assets/gallery/image1.jpg";
  
}
 function changeImage2(params) {
    myImage.src = "/assets/gallery/image2.jpg";
    
 }
 function changeImage3(params) {
    myImage.src = "/assets/gallery/image3.jpg";
    
 }


 document.addEventListener('DOMContentLoaded', function() {
   const openNavMenuButton = document.getElementById('open-nav-menu');
   const closeNavMenuButton = document.getElementById('close-nav-menu');
   const navMenu = document.querySelector('.wrapper');
 
   openNavMenuButton.addEventListener('click', function() {
     navMenu.classList.add('nav-open');
   });
 
   closeNavMenuButton.addEventListener('click', function() {
     navMenu.classList.remove('nav-open');
   });
 });


 function updateGreeting() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var greetingElement = document.getElementById('greeting');

  // Define different greetings for different times of day
  var greetings = {
    morning: 'Good Morning!',
    afternoon: 'Good Afternoon!',
    evening: 'Good Evening!'
  };

  // Determine the appropriate greeting based on the current hour
  var greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = greetings.morning;
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = greetings.afternoon;
  } else {
    greeting = greetings.evening;
  }

  // Update the greeting element with the determined greeting
  greetingElement.textContent = greeting;
}

updateGreeting(); // Update greeting when the page loads

 

