<header class="header">
    <div class="container">
        <h1 class="logo">Mi Empresa</h1>
        <nav class="nav">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/comunidad">Comunidad</a></li>
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="#">Calendario</a></li>
            </ul>
        </nav>
       <!-- Botones de Registro y Login en el Header -->
<div class="auth-buttons">
    <button type="button" class="btn btn-register" onclick="toggleModal('registerModal')">Registro</button>
    <button type="button" class="btn btn-login" onclick="toggleModal('loginModal')">Login</button>
</div>

<!-- Modal de Registro -->
<div id="registerModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="toggleModal('registerModal')">&times;</span>
        <h2>Registro</h2>
        <form id="registerForm" method="POST">
            @csrf
            <input type="text" id="name" name="name" placeholder="Nombre" required>
            <input type="email" id="email" name="email" placeholder="Correo Electrónico" required>
            <input type="password" id="password" name="password" placeholder="Contraseña" required>
            <button type="submit">Registrar</button>
        </form>
        <div id="register-success-message"></div>
        <div id="register-error-message"></div>
    </div>
</div>

<!-- Modal de Login -->
<div id="loginModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="toggleModal('loginModal')">&times;</span>
        <h2>Login</h2>
        <form id="loginForm" method="POST">
            @csrf
            <input type="email" id="loginEmail" name="email" placeholder="Correo Electrónico" required>
            <input type="password" id="loginPassword" name="password" placeholder="Contraseña" required>
            <button type="submit">Ingresar</button>
        </form>
        <div id="login-success-message"></div>
        <div id="login-error-message"></div>
    </div>
</div>


    </div>
</header>

