@extends('layouts.property')

@section('title')
    Propiedad 1 - Armentia Propiedades
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/property/info.css')}}">
@endsection

@section('nav')
    @component('components.nav.global')
    @endcomponent
@endsection

@section('main')
    <section id="property" class="property col-12">
        <div class="row">
            <main class="col-12 py-5 text-left">
                <header class="title col-12 mb-3">
                    <h2 class="MontereyFLF mb-0 mt-4">Propiedad 1</h2>
                </header>
                <div class="row">
                    <section class="gallery col-12 col-md-6 px-3">
                        <div class="row justify-content-between px-3 pr-md-0">
                            <div class="arrows">
                                <button class="btn btn-uno arrow prev hidden m-0">
                                    <i class="fas fa-arrow-up"></i>
                                </button>
                                <button class="btn btn-uno arrow next m-0">
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                            </div>
                            <div class="images p-0" data-current="0">
                                <a href="#" class="gallery-button active mb-3">
                                    <img class="m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </a>
                                <a href="#" class="gallery-button mb-3">
                                    <img class="m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </a>
                                <a href="#" class="gallery-button mb-3">
                                    <img class="m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </a>
                                <a href="#" class="gallery-button mb-3">
                                    <img class="m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </a>
                                <a href="#" class="gallery-button mb-3">
                                    <img class="m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </a>
                                <a href="#" class="gallery-button">
                                    <img class="m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </a>
                            </div>
                            <a target="_blank" href="{{ asset('storage/property/1/01.jpg') }}" class="selected overflow-hidden p-0">
                                <figure class="m-0">
                                    <img class="zoom" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </figure>
                            </a>
                        </div>
                    </section>
                    <section class="details col-12 col-md-6 px-3">
                        <header class="header mb-3">
                            <h3 class="h5 mb-0 text-left MontereyFLF mb-0 mt-4 mt-md-0">
                                <span class="category color-uno">Departamento</span>
                                <br>
                                <span class="location color-dos">San Cayetano</span>
                            </h3>
                        </header>
                        <main>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eum reiciendis dolor voluptatem! Commodi architecto est ipsam vel placeat quaerat, libero et eveniet unde, ratione veritatis quod recusandae provident tempora!</p>
                        </main>
                    </section>
                </div>
            </main>
        </div>
    </section>
@endsection

@section('footer')
    @component('components.footer.property')
    @endcomponent
@endsection

@section('js')
    <script type="module" src="{{asset('js/property/info.js')}}"></script>
@endsection