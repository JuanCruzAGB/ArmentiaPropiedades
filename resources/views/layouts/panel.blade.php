@extends('layouts.index')

@section('head')
    <!-- Layout CSS -->
    <link href={{ asset('css/layouts/web.css') }} rel="stylesheet">

    <!-- Section CSS -->
    @yield('css')

    <title>@yield('title')</title>
@endsection

@section('body')
    <main id="tab-panel" class="tab-menu vertical relative col-12 p-0">
        <section class="tabs background background-one mb-4 mb-md-0">
            <a href="/" class="tab-header logo">
                <picture>
                    <source srcset="{{asset('img/resources/logo_medio_white.png')}}"
                        media="(min-width: 768px)"/>
                    <img src="{{asset('img/resources/logo_chico.png')}}" 
                        alt="Armentia Propiedades Logo"/>
                </picture>
                <h1 class="mb-0">Armentia Propiedades</h1>
            </a>
            
            <ul class="tab-menu-list mb-0">
                @yield('tab-menu-list')
            </ul>
            
            <footer class="tab-footer d-flex justify-content-center">
                <a href="/cerrar-sesion" class="btn btn-uno btn-small p-md-3">
                    <i class="link-icon left fas fa-sign-out-alt"></i>
                    <span class="link-text">Cerrar Sesión</span>
                </a>
            </footer>
        </section>

        <section class="tab-content-list mx-auto">
            @yield('tab-content-list')
        </section>
    </main>
@endsection

@section('extras')
    <!-- Layout CSS -->
    <script src={{ asset('js/layouts/web.js') }}></script>

    <!-- Section JS -->
    @yield('js')
@endsection