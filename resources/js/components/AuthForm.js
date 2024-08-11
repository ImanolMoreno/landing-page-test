// resources/js/components/AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = () => {
    // Estado para los campos del formulario y los mensajes de error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica
        if (!email || !password) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        // Implementar la lógica para enviar datos a tu backend
        try {
            // Aquí puedes usar fetch o axios para enviar una solicitud HTTP
            const response = await fetch('/api/auth', { // Cambia esta URL según tu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Manejar respuesta exitosa (p.ej., redirigir al usuario o mostrar un mensaje)
                console.log('Formulario enviado con éxito');
                setEmail('');
                setPassword('');
                setError('');
            } else {
                // Manejar errores (p.ej., mostrar un mensaje de error)
                const errorData = await response.json();
                setError(errorData.message || 'Hubo un error al enviar el formulario.');
            }
        } catch (err) {
            setError('Hubo un error al enviar el formulario.');
            console.error('Error en la solicitud:', err);
        }
    };

    return (
        <div>
            <h2>Registro / Login</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Mostrar mensajes de error */}
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Registrar / Iniciar sesión</button>
            </form>
        </div>
    );
};

export default AuthForm;
