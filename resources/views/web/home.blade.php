@extends('layouts.web')

@section('title')
    Armentia Propiedades - En los negocios no se consigue lo que se merece, se consigue lo que se negocia. Negocie con nosotros.
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/web/home.css')}}">
@endsection

@section('nav')
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
                <p class="Work-Sans mb-0 text-center">En los negocios no se consigue lo que se merece, se consigue lo que se negocia. Negocie con nosotros.</p>
            </main>
        </div>
    </section>
    <section id="recommended" class="recommended col-12">
        <div class="row">
            <main class="col-12 py-5">
                @foreach ($favorites as $favorite)
                    <header class="title col-12 mb-3">
                        <a href="/propiedades?ubicaciones={{ $favorite->location->slug }}" class="">
                            <i class="icon fas fa-angle-right"></i>
                            <h3 class="MontereyFLF mb-0 mt-4">{{ $favorite->location->name }}</h3>
                        </a>
                    </header>
                    @component('components.property.list', [
                        'properties' => $favorite->properties,
                    ])
                    @endcomponent
                @endforeach
            </main>
        </div>
    </section>
@endsection

@section('footer')
    @component('components.footer.global')
    @endcomponent
@endsection

@section('js')
    {!! NoCaptcha::renderJs() !!}
    <script>
        const validation = @json($validation);
    </script>
    <script type="module" src="{{asset('js/web/home.js')}}"></script>
@endsection