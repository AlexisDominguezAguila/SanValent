function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'elamordetuvida@love.com' && password === '30/11/2021') {
        window.location.href = 'principal.html'; 
    } else {
        alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
}