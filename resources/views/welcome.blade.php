<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_footer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_body.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_header.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style_modal.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>
<body>
    @include('Header.header')
    @include('Body.body')
    @include('Footer.footer')
    
    <!-- Incluye el archivo JS -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/modals.js') }}"></script>
</body>
</html>