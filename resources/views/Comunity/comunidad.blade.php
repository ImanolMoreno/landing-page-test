<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comunidad</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_footer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_body.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_header.css') }}">
</head>
<body>
    @include('Header.header')
    <main>
        <section class="community">
            <div class="container">
                <h2>Nuestra Comunidad</h2>
                <p>Únete a nuestra comunidad y participa en eventos y foros de discusión.</p>
            </div>
        </section>
    </main>
    @include('Footer.footer')
</body>
</html>
