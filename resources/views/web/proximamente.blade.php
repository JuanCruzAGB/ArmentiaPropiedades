@extends('layout.index')

@section('title')
    Proximamente
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/web/proximamente.css')}}">
@endsection

@section('js')
    <script src="{{asset('js/web/proximamente.js')}}"></script>
@endsection

@section('header')
    <!-- -->
@endsection

@section('main')
    <section class="header">
        <img src="{{asset('img/resources/logo.png')}}" alt="Armentia Propiedades Logo">
    </section>
    <section class='main'>
        <p>PROXIMAMENTE</p>
        <div class="social-media">

        </div>
    </section>
@endsection

@section('footer')
    <!-- -->
@endsection