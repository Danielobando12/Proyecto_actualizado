// JavaScript (script.js)

document.addEventListener('DOMContentLoaded', function () {
    // Redireccionar automáticamente al formulario de inicio de sesión
    $signIn.classList.add('active');
    $signUp.classList.remove('active');
});

const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $signUp = document.querySelector('.sign-up'),
      $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

function validateLogin() {
    var messageContainer = document.getElementById("message-container");
    messageContainer.innerHTML = '<p>Validando usuario. Por favor, espere...</p>';

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!isValidPassword(password)) {
        messageContainer.innerHTML = '<p style="color: red;">Contraseña incorrecta. Asegúrese de que cumpla con los requisitos.</p>';
        return;
    }

    simulateUserValidation(email, password)
        .then(function (isValidUser) {
            if (isValidUser) {
                setTimeout(function () {
                    window.location.href = 'pruebaPagina.html';
                }, 2000);
            } else {
                messageContainer.innerHTML = '<p style="color: red;">Credenciales incorrectas. Por favor, inténtelo de nuevo.</p>';
            }
        })
        .catch(function (error) {
            messageContainer.innerHTML = '<p style="color: red;">Error en la validación del usuario: ' + error + '</p>';
        });
}

function isValidPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

function simulateUserValidation(email, password) {
    return new Promise(function (resolve, reject) {
        var validUsers = [
            { email: "user1@example.com", password: "Pass123@" },
            { email: "user2@example.com", password: "Pass456@" },
            { email: "user3@example.com", password: "Pass789@" }
        ];

        setTimeout(function () {
            var isValidUser = false;
            for (var i = 0; i < validUsers.length; i++) {
                if (validUsers[i].email === email && validUsers[i].password === password) {
                    isValidUser = true;
                    break;
                }
            }

            if (isValidUser) {
                resolve(true);
            } else {
                reject("Usuario no válido");
            }
        }, 1000);
    });
}
