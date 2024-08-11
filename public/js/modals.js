function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Manejar el formulario de registro
    document.getElementById('registerForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const successMessage = document.getElementById('register-success-message');
        const errorMessage = document.getElementById('register-error-message');

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify({ name, email, password }),
            });

            const responseText = await response.text();

            if (response.ok) {
                successMessage.textContent = 'Registro exitoso.';
                errorMessage.textContent = '';
                document.getElementById('registerForm').reset();
                toggleModal('registerModal');
            } else {
                errorMessage.textContent = responseText || 'Hubo un error al registrar.';
                successMessage.textContent = '';
            }
        } catch (err) {
            errorMessage.textContent = 'Hubo un error al enviar el formulario.';
            successMessage.textContent = '';
            console.error('Error en la solicitud:', err);
        }
    });

    // Manejar el formulario de login (similar al de registro)
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const successMessage = document.getElementById('login-success-message');
        const errorMessage = document.getElementById('login-error-message');

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify({ email, password }),
            });

            const responseText = await response.text();

            if (response.ok) {
                successMessage.textContent = 'Login exitoso.';
                errorMessage.textContent = '';
                document.getElementById('loginForm').reset();
                toggleModal('loginModal');
            } else {
                errorMessage.textContent = responseText || 'Hubo un error al ingresar.';
                successMessage.textContent = '';
            }
        } catch (err) {
            errorMessage.textContent = 'Hubo un error al enviar el formulario.';
            successMessage.textContent = '';
            console.error('Error en la solicitud:', err);
        }
    });
});
