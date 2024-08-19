document.getElementById('generate').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    const lengthInput = document.getElementById('length');
    const length = parseInt(lengthInput.value);

    if (isNaN(length) || length < 8 || length > 20) {
        alert('Please enter a valid length between 8 and 20');
        return;
    }

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordField.value = password;
});
