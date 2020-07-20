@extends('layout.index')

@section('title')
    Armentia Propiedades - Eslogan
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/web/home.css')}}">
@endsection

@section('js')
    <script src="{{asset('js/web/home.js')}}"></script>
@endsection

@section('header')
    @component('components.nav.global')
    @endcomponent
@endsection

@section('main')
    <section id="banner" class="banner col-12">
        <aside class="banner-img"></aside>
        <div class="banner-body row">
            <header class="banner-title col-12 mb-3">
                <h2 class="MontereyFLF mb-0">¿Qué buscas?</h2>
            </header>
            <main class="banner-content col-12">
                <p class="Work-Sans mb-0 text-center">En los negocios no se consigue lo que se merece, se consigue lo que se negocia</p>
            </main>
        </div>
    </section>
    <section id="recommended" class="recommended col-12">
        <div class="row">
            <main class="col-12 py-5">
                @component('components.property.list')
                @endcomponent
            </main>
        </div>
    </section>
@endsection

@section('footer')
    @component('components.footer.global')
    @endcomponent
@endsection