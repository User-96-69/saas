document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'yourusername' && password === 'yourpassword') {
        // Successful login
        document.getElementById('error-message').innerText = 'Login successful!';
        document.getElementById('error-message').style.color = 'green';
    } else {
        // Failed login
        document.getElementById('error-message').innerText = 'Invalid username or password. Please try again.';
        document.getElementById('error-message').style.color = 'red';
    }
});
