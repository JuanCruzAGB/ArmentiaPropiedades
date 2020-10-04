@extends('layouts.web')

@section('title')
    Armentia Propiedades - Eslogan
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/web/panel.css')}}">
@endsection

@section('header')
    @component('components.nav.global')
    @endcomponent
@endsection

@section('main')
    <!--  -->
@endsection

@section('footer')
    @component('components.footer.global')
    @endcomponent
@endsection

@section('js')
    <script src="{{asset('js/web/panel.js')}}"></script>
@endsection