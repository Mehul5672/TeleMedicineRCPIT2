document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the username entered by the user
    var username = document.getElementById('username').value;
  
    // Display welcome message
    var welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.innerText = "Welcome " + username + "!";
    welcomeMessage.style.display = "block";
  });
  