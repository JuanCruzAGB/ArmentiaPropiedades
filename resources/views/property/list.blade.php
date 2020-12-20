@extends('layouts.property')

@section('title')
    Propiedades - Armentia Propiedades
@endsection

@section('css')
    <meta name="asset" content="{{ asset('storage') }}">
    <link rel="stylesheet" href="{{ asset('css/property/list.css') }}">
@endsection

@section('nav')
    @component('components.nav.filter',[
        'categories' => $categories,
        'locations' => $locations,
    ])
    @endcomponent
@endsection

@section('main')
    <section id="recommended" class="recommended col-12">
        <div class="row">
            <main class="col-12 py-5 text-center"></main>
        </div>
    </section>
@endsection

@section('footer')
    @component('components.footer.properties')
    @endcomponent
@endsection

@section('js')
    <script>
        const properties = @json($properties);
    </script>
    <script type="module" src="{{ asset('js/property/list.js') }}"></script>
@endsection