<main>
    <section class="hero">
        <div class="container">
            <h1>Servicios de Apoyo por Internet y Bases de Datos</h1>
            <p>Ofrecemos soluciones integrales para la gestión y soporte de tus bases de datos en la nube.</p>
            <a href="#services" class="btn btn-primary">Descubre Más</a>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2>Nuestros Servicios</h2>
            <div class="service-item">
                <h3>Consultoría en Bases de Datos</h3>
                <p>Asesoramiento experto para optimizar y gestionar tus bases de datos.</p>
            </div>
            <div class="service-item">
                <h3>Soporte Técnico 24/7</h3>
                <p>Asistencia técnica disponible en cualquier momento para resolver tus problemas.</p>
            </div>
            <div class="service-item">
                <h3>Implementación en la Nube</h3>
                <p>Soluciones de bases de datos en la nube para mejorar la accesibilidad y seguridad.</p>
            </div>
        </div>
    </section>

    <section id="dynamic-boxes" class="dynamic-boxes">
        <div class="container">
            <div class="box" id="box1">Aprendiendo...</div>
            <div class="box" id="box2">Mysql...</div>
            <div class="box" id="box3">Basico...</div>
        </div>
    </section>

    <!-- Presentacion adiciona y Busqeda -->
    <section id="presentation-search" class="presentation-search">
        <div class="container">
            <h2>Explora Nuestras Soluciones</h2>
            <div class="presentation-windows">
                <div class="presentation-item">
                    <img src="{{ asset('images/window1.jpg') }}" alt="Ventana 1">
                    <h3>Gestión de Bases de Datos</h3>
                    <p>Descubre cómo mejorar la eficiencia de tu gestión de bases de datos.</p>
                </div>
                <div class="presentation-item">
                    <img src="{{ asset('images/window2.jpg') }}" alt="Ventana 2">
                    <h3>Implementaciones en la Nube</h3>
                    <p>Optimiza tus recursos con soluciones en la nube.</p>
                </div>
                <div class="presentation-item">
                    <img src="{{ asset('images/window3.jpg') }}" alt="Ventana 3">
                    <h3>Seguridad y Soporte</h3>
                    <p>Protege tus datos con nuestras soluciones de seguridad.</p>
                </div>
            </div>
            <div class="search-section">
                <h2>Que necesitas?</h2>
                <input type="text" id="search-input" placeholder="Buscar servicios o soluciones...">
                <ul id="search-suggestions" class="search-suggestions">
                    <!-- Las recomendaciones de búsqueda se llenarán dinámicamente con JavaScript -->
                </ul>
            </div>
        </div>
    </section>

    <div id="react-root"></div>
    <script src="{{ mix('js/app.jsx') }}"></script>
    <script src="{{ asset('js/dynamic-boxes.jsx') }}"></script>
    <script src="/public/js/app.js"></script>
</main>
