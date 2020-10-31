@extends('layouts.panel')

@section('title')
    Armentia Propiedades - Panel
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/web/panel.css')}}">
@endsection

@section('tab-menu-list')
    <li class="tab"><a href="#categorias" class="tab-link active btn btn-uno m-0">
        <span class="link-text">Categorías</span>
    </a></li>
    <li class="tab"><a href="#propiedades" class="tab-link btn btn-uno m-0">
        <span class="link-text">Propiedades</span>
    </a></li>
    <li class="tab"><a href="#ubicaciones" class="tab-link btn btn-uno m-0">
        <span class="link-text">Ubicaciónes</span>
    </a></li>
@endsection

@section('tab-content-list')
    @component('components.category.panel')
    @endcomponent
    @component('components.property.panel')
    @endcomponent
    @component('components.location.panel')
    @endcomponent
    
    <aside class="panel floating-menu bottom right">
        <a href="#" class="add-data floating-button btn btn-uno btn-icon round">
            <i class="fas fa-plus"></i>
        </a>
    </aside>
@endsection

@section('js')
    <script src="{{asset('js/web/panel.js')}}"></script>
@endsection