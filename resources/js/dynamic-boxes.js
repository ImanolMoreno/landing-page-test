import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DynamicBoxes() {
    const [boxContent, setBoxContent] = useState({
        box1: 'Aprendiendo...',
        box2: 'Mysql...',
        box3: 'Básico...',
    });

    const handleClick = (action) => {
        if (action === 'register') {
            setBoxContent({
                box1: 'Registrando...',
                box2: 'Información...',
                box3: 'Guardando...',
            });
        } else if (action === 'login') {
            setBoxContent({
                box1: 'Accediendo...',
                box2: 'Verificando...',
                box3: 'Bienvenido...',
            });
        }
    };

    return (
        <div className="container">
            <div className="box" id="box1">{boxContent.box1}</div>
            <div className="box" id="box2">{boxContent.box2}</div>
            <div className="box" id="box3">{boxContent.box3}</div>
            <button onClick={() => handleClick('register')}>Register</button>
            <button onClick={() => handleClick('login')}>Login</button>
        </div>
    );
}

if (document.getElementById('react-root')) {
    ReactDOM.render(<DynamicBoxes />, document.getElementById('react-root'));
}
