// ===== Greeting + live clock for Home page =====
function updateClock() {
  var now = new Date();
  var hour = now.getHours();
  var greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  document.getElementById("greeting").textContent = greeting + "! \u2728";
  document.getElementById("clock").textContent = now.toLocaleTimeString();
  document.getElementById("date").textContent = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

updateClock();                 // run once immediately
setInterval(updateClock, 1000); // then update every second