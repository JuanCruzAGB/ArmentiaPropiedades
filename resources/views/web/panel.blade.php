@extends('layouts.web')

@section('title')
    Armentia Propiedades - Panel
@endsection

@section('css')
    <link rel="stylesheet" href="{{asset('css/web/panel.css')}}">
@endsection

@section('nav')
    @component('components.nav.global')
    @endcomponent
@endsection

@section('main')
    <div id="tab-panel" class="col-12 relative tab-menu vertical p-0">
        <section class="tabs background background-one mb-4 mb-md-0">
            <ul class="tab-menu-list mb-0">
                <li class="tab"><a href="#categorias" class="tab-link active btn btn-nine-transparent m-0">
                    <span class="link-text">Categorías</span>
                </a></li>
                <li class="tab"><a href="#propiedades" class="tab-link btn btn-nine-transparent m-0">
                    <span class="link-text">Propiedades</span>
                </a></li>
                <li class="tab"><a href="#ubicaciones" class="tab-link btn btn-nine-transparent m-0">
                    <span class="link-text">Ubicaciónes</span>
                </a></li>
            </ul>
        </section>

        <section class="tab-content-list mx-auto">
            <section id="categorias" class="tab-content opened">
                <main class="row relative mx-md-0">
                    <header class="content-header col-12 mx-lg-0">
                        <h2 class="MontereyFLF title text-uppercase text-left mt-4 mb-3 mt-md-0 px-2">Categorías</h2>
                    </header>
                    <main class="content-table col-12">
                        <table class="table">
                            <thead>
                                <tr class="background background-uno color-tres">
                                    <th scope="col" class="Work-Sans h4">id</th>
                                    <th scope="col" class="Work-Sans h4">name</th>
                                    <th scope="col" class="Work-Sans h4">date</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">3</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                </main>
            </section>
            <section id="propiedades" class="tab-content closed">
                <main class="row relative mx-lg-0">
                    <header class="content-header col-12 mx-lg-0">
                        <h2 class="MontereyFLF title text-uppercase text-left mt-4 mb-3 mt-md-0 px-2">Propiedades</h2>
                    </header>
                    <main class="content-table col-12">
                        <table class="table">
                            <thead>
                                <tr class="background background-uno color-tres">
                                    <th scope="col" class="Work-Sans h4">id</th>
                                    <th scope="col" class="Work-Sans h4">name</th>
                                    <th scope="col" class="Work-Sans h4">date</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">3</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                </main>
            </section>
            <section id="ubicaciones" class="tab-content closed">
                <main class="row relative mx-lg-0">
                    <header class="content-header col-12 mx-lg-0">
                        <h2 class="MontereyFLF title text-uppercase text-left mt-4 mb-3 mt-md-0 px-2">Ubicaciones</h2>
                    </header>
                    <main class="content-table col-12">
                        <table class="table">
                            <thead>
                                <tr class="background background-uno color-tres">
                                    <th scope="col" class="Work-Sans h4">id</th>
                                    <th scope="col" class="Work-Sans h4">name</th>
                                    <th scope="col" class="Work-Sans h4">date</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">3</td>
                                    <td>pepe</td>
                                    <td>18/10/2020</td>
                                    <td class="actions px-0">
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Ver más">
                                            <i class="icon fas fa-eye"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon mr-3" title="Actualizar">
                                            <i class="icon fas fa-pen"></i>
                                        </a>
                                        <a href="#" class="btn btn-uno-transparent btn-icon" title="Borrar">
                                            <i class="icon fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                </main>
            </section>
        </section>
    </div>
@endsection

@section('footer')
    @component('components.footer.panel')
    @endcomponent
@endsection

@section('js')
    <script src="{{asset('js/web/panel.js')}}"></script>
@endsection