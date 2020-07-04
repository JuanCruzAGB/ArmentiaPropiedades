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
        <p>Proximamente</p>
        <div class="social-media">
            <ul>
                <li>
                    <a href="https://www.facebook.com/ArmentiaPropiedades/" target="_blank">
                        <i class="social-icon mr-2 fab fa-facebook-square"></i>
                        <span>/<span class="initial">A</span>rmentia<span class="initial">P</span>ropiedades</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/armentiapropiedades/" target="_blank">
                        <i class="social-icon mr-2 fab fa-instagram"></i>
                        <span>@armentiapropiedades</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
@endsection

@section('footer')
    <!-- -->
@endsection