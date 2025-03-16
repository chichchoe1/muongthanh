// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    // Assuming the username is stored in session storage
    const username = sessionStorage.getItem('username');
    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
    }

    // Add event listener for logout button
    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.removeItem('username');
        window.location.href = 'login.html';
    });
});

// ...existing code...
