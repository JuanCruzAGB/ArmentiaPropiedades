<!DOCTYPE html>
<html lang="es">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

        <!-- Material Design Bootstrap -->
        <link href={{ asset('css/mdb/bootstrap.min.css') }} rel="stylesheet">
        <link href={{ asset('css/mdb/mdb.min.css') }} rel="stylesheet">

        <!-- External Repositories CSS -->
        <link href={{ asset('submodules/FloatingMenuJS/css/styles.css') }} rel="stylesheet">
        <link href={{ asset('submodules/DropdownJS/css/styles.css') }} rel="stylesheet">
        <link href={{ asset('submodules/SidebarJS/css/styles.css') }} rel="stylesheet">
        <link href={{ asset('submodules/NavmenuJS/css/styles.css') }} rel="stylesheet">
        <link href={{ asset('submodules/NotificationJS/css/styles.css') }} rel="stylesheet">

        <!-- Global layout CSS -->
        <link href={{ asset('css/layouts/index.css') }} rel="stylesheet">

        <!-- Section CSS -->
        @yield('head')
    </head>
    <body>
        @yield('body')
        
        @component('components.floating.whatsapp')
        @endcomponent

        <!-- Material Design Bootstrap & JQuery -->
        <script src={{ asset('js/mdb/jquery.min.js') }}></script>
        <script src={{ asset('js/mdb/popper.min.js') }}></script>
        <script src={{ asset('js/mdb/bootstrap.min.js') }}></script>
        <script src={{ asset('js/mdb/mdb.min.js') }}></script>

        <!-- External Repositories js -->

        <!-- Global layout JS -->
        <script type="module" src={{ asset('js/layouts/index.js') }}></script>

        <!-- Added extras section -->
        @yield('extras')
    </body>
</html>