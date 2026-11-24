document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("greet-btn").addEventListener("click", function () {
  var hour = new Date().getHours();
  var greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  document.getElementById("greet-msg").textContent = greeting + "! Thanks for visiting.";
});
