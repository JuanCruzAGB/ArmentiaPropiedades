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
    <section class="header col-12 mb-2">
        <img src="{{asset('img/resources/logo.png')}}" alt="Armentia Propiedades Logo">
    </section>
    <section class='main col-12 mt-2'>
        <p>PROXIMAMENTE</p>
        <div class="social-media">
            <ul>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <i></i>
                        <span></span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
@endsection

@section('footer')
    <!-- -->
@endsection