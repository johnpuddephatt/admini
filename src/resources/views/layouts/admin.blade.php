<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('vendor/admini/css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
</head>

<body class="has-background-light">
    <div id="app">

    @include('admini::partials.navbar')

    @include('admini::partials.sidebar')

    <main class="section is-fullheight">
        @yield('content')
    </main>

    </div>
    <script src="{{ asset('vendor/admini/js/app.js') }}"></script>
</body>

</html>
