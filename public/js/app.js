async function handleRegister(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({ email, password }),
        });

        const responseText = await response.text(); // Obtener el texto de la respuesta para depuración
        console.log('Respuesta del servidor:', responseText);


        if (response.ok) {
            successMessage.textContent = 'Registro exitoso.';
            errorMessage.textContent = '';
            document.getElementById('registerForm').reset();
        } else {
            const errorData = JSON.parse(responseText);
            errorMessage.textContent = errorData.message || 'Hubo un error al registrar.';
            successMessage.textContent = '';
        }

            
        const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                const errorData = JSON.parse(responseText);
                errorMessage.textContent = errorData.message || 'Hubo un error al registrar.';
                successMessage.textContent = '';
            } else {
                // Si no es JSON, trata el contenido como texto plano
                errorMessage.textContent = 'Hubo un error al registrar.';
                successMessage.textContent = '';
            }

    } catch (err) {
        errorMessage.textContent = 'Hubo un error al enviar el formulario.';
        successMessage.textContent = '';
        console.error('Error en la solicitud:', err);
    }
}

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const successMessage = document.getElementById('login-success-message');
    const errorMessage = document.getElementById('login-error-message');

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({ email, password }),
        });

        const responseText = await response.text();
        console.log('Respuesta del servidor:', responseText);

        if (response.ok) {
            successMessage.textContent = 'Login exitoso.';
            errorMessage.textContent = '';
            document.getElementById('loginForm').reset();

            // Redirigir al usuario o realizar otras acciones
        } else {
            const errorData = JSON.parse(responseText);
            errorMessage.textContent = errorData.message || 'Credenciales incorrectas.';
            successMessage.textContent = '';
        }
    } catch (err) {
        errorMessage.textContent = 'Hubo un error al enviar el formulario.';
        successMessage.textContent = '';
        console.error('Error en la solicitud:', err);
    }
}
