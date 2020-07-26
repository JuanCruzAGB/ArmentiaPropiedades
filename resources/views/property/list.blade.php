@extends('layout.index')

@section('title')
    Propiedades - Armentia Propiedades
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/property/list.css')}}">
@endsection

@section('js')
    <script src="{{asset('js/property/list.js')}}"></script>
@endsection

@section('header')
    @component('components.nav.properties')
    @endcomponent
@endsection

@section('main')
    <section id="filters" class="filters col-12">
        <ul class="filter-menu m-0">
            <li class="dropdown closed">
                <span class="filter-text p-3">
                    Tipo de Propiedad
                    <button class="dropdown-btn">
                        <i class="dropdown-icon fas fa-sort-down"></i>
                    </button>
                </span>
                <ul class="dropdown-menu">
                    <li class="m-0">
                        <button class="filter-button dropdown-link">
                            <span class="link-text">Departamento</span>
                        </button>
                    </li>
                    <li class="m-0">
                        <button class="filter-button dropdown-link">
                            <span class="link-text">Terreno</span>
                        </button>
                    </li>
                </ul>
            </li>
            <li class="dropdown closed">
                <span class="filter-text p-3">
                    Ciudades
                    <button class="dropdown-btn">
                        <i class="dropdown-icon fas fa-sort-down"></i>
                    </button>
                </span>
                <ul class="dropdown-menu">
                    <li class="m-0">
                        <button class="filter-button dropdown-link">
                            <span class="link-text">Necochea</span>
                        </button-user>
                    </li>
                    <li class="m-0">
                        <button class="filter-button dropdown-link">
                            <span class="link-text">San Cayetano</span>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
    <section id="recommended" class="recommended col-12">
        <div class="row">
            <main class="col-12 py-5 text-center">
                @component('components.property.list')
                @endcomponent
            </main>
        </div>
    </section>
@endsection

@section('footer')
    @component('components.footer.properties')
    @endcomponent
@endsection