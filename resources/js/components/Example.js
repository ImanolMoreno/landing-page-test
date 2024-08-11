// resources/js/components/Example.jsx

import React from 'react';

const Example = () => {
    const handleRegisterClick = () => {
        alert('Botón de Registro presionado');
    };

    const handleLoginClick = () => {
        alert('Botón de Login presionado');
    };

    return (
        <div>
            <button onClick={handleRegisterClick}>Register</button>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
};

export default Example;
