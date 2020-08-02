<!DOCTYPE html>
<html lang="es">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

        <!-- Material Design Bootstrap -->
        <link href="{{ asset('css/mdb/bootstrap.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/mdb/mdb.min.css') }}" rel="stylesheet">

        <!-- External Repositories CSS -->
        <link href="{{ asset('submodules/NavmenuJS/css/styles.css') }}" rel="stylesheet">
        <link href="{{ asset('submodules/DropdownJS/css/styles.css') }}" rel="stylesheet">

        <!-- ArmentiaPropiedades Repositorie CSS -->
        <link href="{{ asset('css/layout/index.css') }}" rel="stylesheet">
        @yield('css')

        <title>@yield('title')</title>
    </head>
    <body>
        <header class="header">
            @yield('header')
        </header>
                
        <main class="main container-fluid">
            <div class="row">
                @yield('main')
            </div>
        </main>

        <footer class="footer"> 
            @yield('footer')
        </footer>

        <!-- Material Design Bootstrap -->
        <script src="{{ asset('js/mdb/jquery.min.js') }}"></script>
        <script src="{{ asset('js/mdb/popper.min.js') }}"></script>
        <script src="{{ asset('js/mdb/bootstrap.min.js') }}"></script>
        <script src="{{ asset('js/mdb/mdb.min.js') }}"></script>

        <!-- ArmentiaPropiedades Repositorie JS -->
        <script type="module" src="{{ asset('js/layout/index.js') }}"></script>
        @yield('js')
    </body>
</html>