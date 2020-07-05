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
    <!-- -->
@endsection

@section('footer')
    @component('components.footer.global')
    @endcomponent
@endsection