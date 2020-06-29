<!DOCTYPE html>
<html lang="es">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

        <!-- NavMenuJS Repositorie CSS -->
        <link href="{{ asset('submodules/NavmenuJS/css/styles.css') }}" rel="stylesheet">

        <!-- ArmentiaPropiedades Repositorie CSS -->
        <link href="{{ asset('css/layout/index.css') }}" rel="stylesheet">
        @yield('css')

        <title>@yield('title')</title>
    </head>
    <body>
        <header>
            @yield('nav')
        </header>
                
        <main>
            @yield('main')
        </main>

        <footer> 
            @yield('footer')
        </footer>

        <!-- ArmentiaPropiedades Repositorie JS -->
        <script type="module" src="{{asset('js/layout/index.js')}}"></script>
        @yield('js')
    </body>
</html>