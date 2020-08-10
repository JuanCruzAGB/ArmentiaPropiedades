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
            <li data-name="tipo-de-propiedad" class="dropdown-js closed mr-3">
                <a href="/propiedades?tipo_de_propiedad=null" class="dropdown-title filter-text p-3">
                    Tipo de Propiedad
                    <button class="dropdown-button">
                        <i class="dropdown-icon fas fa-sort-down"></i>
                    </button>
                </a>
                <ul class="dropdown-menu-list mt-0">
                    <li data-name="departamento" class="m-0">
                        <a href="/propiedades?tipo_de_propiedad=departamento" class="dropdown-link filter-button">
                            <span class="link-text">Departamento</span>
                        </a>
                    </li>
                    <li data-name="terreno" class="m-0">
                        <a href="/propiedades?tipo_de_propiedad=terreno" class="dropdown-link filter-button">
                            <span class="link-text">Terreno</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li data-name="ciudad" class="dropdown-js closed mr-3">
                <a href="/propiedades?ciudad=null" class="dropdown-title filter-text p-3">
                    Ciudades
                    <button class="dropdown-button">
                        <i class="dropdown-icon fas fa-sort-down"></i>
                    </button>
                </a>
                <ul class="dropdown-menu-list mt-0">
                    <li data-name="necochea" class="m-0">
                        <a href="/propiedades?ciudad=necochea" class="dropdown-link filter-button">
                            <span class="link-text">Necochea</span>
                        </a>
                    </li>
                    <li data-name="san-cayetano" class="m-0">
                        <a href="/propiedades?ciudad=san-cayetano" class="dropdown-link filter-button">
                            <span class="link-text">San Cayetano</span>
                        </a>
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