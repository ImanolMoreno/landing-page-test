<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servicios</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_footer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_body.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_header.css') }}">
</head>
<body>
    @include('Header.header')
    <main>
        <section class="services services-background">
            <div class="container">
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos una variedad de servicios para satisfacer tus necesidades tecnológicas.</p>
            </div>
        </section>
    </main>
    @include('Footer.footer')
</body>
</html>