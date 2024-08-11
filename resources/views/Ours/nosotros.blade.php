<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nosotros</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_footer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_body.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_header.css') }}">
</head>
<body>
    @include('Header.header')
    <main>
        <section class="about-us">
            <div class="container">
                <h2>Sobre Nosotros</h2>
                <p>Somos una empresa dedicada a ofrecer soluciones tecnológicas innovadoras.</p>
            </div>
        </section>
    </main>
    @include('Footer.footer')
</body>
</html>
