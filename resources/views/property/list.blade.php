@extends('layouts.property')

@section('title')
    Propiedades - Armentia Propiedades
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/property/list.css')}}">
@endsection

@section('nav')
    @component('components.nav.filter')
    @endcomponent
@endsection

@section('main')
    <section id="recommended" class="recommended col-12">
        <div class="row">
            <main class="col-12 py-5 text-center">
                @component('components.property.list', [
                    'properties' => $properties,
                ])
                @endcomponent
            </main>
        </div>
    </section>
@endsection

@section('footer')
    @component('components.footer.properties')
    @endcomponent
@endsection

@section('js')
    <script src="{{asset('js/property/list.js')}}"></script>
@endsection