document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const timestamp = new Date().toISOString();

        const loginData = {
            username: username,
            password: password,
            timestamp: timestamp
        };

        // Log the credentials as JSON to the console
        console.log('Login Attempt:', JSON.stringify(loginData, null, 2));

        // Optional: Alert the user (for demo purposes, user didn't ask but helps verify)
        // alert('Check console for login data!');
    });
});
