<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/images/icon.png') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="{{ asset('assets/css/datatables.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/global.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script src="{{ asset('assets/js/datatables.min.js') }}"></script>
    <script src="{{ asset('assets/js/global.js') }}"></script>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.6.0/js/bootstrap.min.js"></script>

    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/alpine.js'])
</head>

<body class="font-sans antialiased">
    @props(['sidebar'])
    <div class="min-h-screen bg-stone-900">
        <div class="flex">
            <div class="w-52 h-screen bg-stone-900">
                @include('layouts.sidebar', ['sidebar' => $sidebar])
            </div>
            <main class="w-screen h-screen py-2 px-2">
                <div class="bg-stone-100 rounded-md h-full overflow-y-auto">
                    {{ $slot }}
                </div>
            </main>
        </div>
    </div>
</body>

</html>
