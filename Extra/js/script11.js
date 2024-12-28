document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Send data to server
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('User created:', data);
        // You can redirect the user or display a success message here
    })
    .catch(error => {
        console.error('Error creating user:', error);
        // Handle errors here
    });
    
});
