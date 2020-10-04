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
    <a target="_blank" href="{{ asset('storage/property/1/01.jpg') }}" id="banner" class="banner col-12">
        <aside style="--background-img: url('{{ asset('storage/property/1/01.jpg') }}')" class="banner-img"></aside>
    </a>
    <section id="property" class="property col-12">
        <div class="row">
            <main class="col-12 py-5 text-left">
                <header class="title col-12 mb-3">
                    <h2 class="MontereyFLF mb-0 mt-4">Propiedad 1</h2>
                </header>
                <div class="row">
                    <section class="gallery col-12 col-md-6 px-3">
                        <div class="row justify-content-between px-3 pr-md-0">
                            <div class="img-gallery overflow-hidden p-0">
                                <figure>
                                    <img src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </figure>
                                <figure>
                                    <img src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </figure>
                                <figure>
                                    <img src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </figure>
                                <figure>
                                    <img src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </figure>
                            </div>
                            <div class="img-selected overflow-hidden p-0">
                                <figure class="pr-md-3">
                                    <img src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                                </figure>
                            </div>
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
    <script src="{{asset('js/property/info.js')}}"></script>
@endsection