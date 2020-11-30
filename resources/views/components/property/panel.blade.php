<section id="propiedades" class="tab-content closed px-3">
    <main class="table-data row relative mx-md-0 hidden">
        <header class="content-header col-12 mx-lg-0 p-md-0">
            <h2 class="MontereyFLF title text-uppercase text-left mt-4 mb-3 mt-md-0 px-2">Propiedades</h2>
        </header>
        <main class="content-table col-12 p-md-0">
            <table id="propiedades-table" class="table"></table>
        </main>
    </main>
    <form action="#" method="post" class="property details-data row relative mx-md-0 hidden">
        <aside class="panel floating-menu top left">
            <a href="#propiedades" class="return-data floating-button btn btn-uno">
                <i class="icon fas fa-angle-left mr-2"></i>
                <span>Regresar</span>
            </a>
        </aside>
        <aside class="panel floating-menu top right d-flex">
            <a href="#propiedades?" title="Editar" class="edit-data floating-button btn btn-uno-transparent btn-icon">
                <i class="icon fas fa-pen"></i>
            </a>
            <a href="#propiedades?" title="Aceptar" class="confirm-data d-none floating-button btn btn-uno-transparent btn-icon">
                <i class="icon fas fa-check"></i>
            </a>
            <a href="#propiedades?" title="Cancelar" class="cancel-data d-none floating-button btn btn-uno-transparent btn-icon">
                <i class="icon fas fa-times"></i>
            </a>
        </aside>
        @csrf
        <header class="content-header col-12 mx-lg-0 p-md-0">
            <textarea rows="1" disabled type="text" name="name" Placeholder="Nombre de la Propiedad" class="MontereyFLF title text-uppercase text-left mt-4 mt-md-0 px-2"></textarea>
        </header>
        <main class="content-data col-12 p-md-0">
            <div class="row">
                <section id="gallery" class="gallery col-12 col-md-6 px-3">
                    <div class="row justify-content-between px-3 pr-md-0">
                        <div class="images p-0" data-current="0">
                            <button disabled class="mb-3">
                                <i class="fas fa-plus"></i>
                            </button>
                            <label class="gallery-button selected mb-3">
                                <input type="checkbox" name="files[0]" value="{{ asset('storage/property/1/01.jpg') }}">
                                <img class="gallery-image m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                            </label>
                            <label class="gallery-button mb-3">
                                <input type="checkbox" name="files[1]" value="{{ asset('storage/property/2/01.png') }}">
                                <img class="gallery-image m-0" src="{{ asset('storage/property/2/01.png') }}" alt="Property 1 - Image 1">
                            </label>
                            <label class="gallery-button mb-3">
                                <input type="checkbox" name="files[2]" value="{{ asset('storage/property/1/01.jpg') }}">
                                <img class="gallery-image m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                            </label>
                            <label class="gallery-button mb-3">
                                <input type="checkbox" name="files[3]" value="{{ asset('storage/property/1/01.jpg') }}">
                                <img class="gallery-image m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                            </label>
                            <label class="gallery-button mb-3">
                                <input type="checkbox" name="files[4]" value="{{ asset('storage/property/1/01.jpg') }}">
                                <img class="gallery-image m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                            </label>
                            <label class="gallery-button">
                                <input type="checkbox" name="files[5]" value="{{ asset('storage/property/1/01.jpg') }}">
                                <img class="gallery-image m-0" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                            </label>
                        </div>
                        <a target="_blank" href="{{ asset('storage/property/1/01.jpg') }}" class="selected overflow-hidden p-0">
                            <figure class="m-0">
                                <img class="gallery-image zoom" src="{{ asset('storage/property/1/01.jpg') }}" alt="Property 1 - Image 1">
                            </figure>
                            <div class="buttons">
                                <button disabled class="btn btn-uno btn-icon">
                                    <i class="fas fa-check"></i>
                                </button>
                                <button disabled class="btn btn-uno btn-icon">
                                    <i class="fas fa-times"></i>
                                </button>
                                <button disabled class="btn btn-uno btn-icon">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </a>
                    </div>
                </section>
                <section class="details col-12 col-md-6 px-3">
                    <header class="header mb-3">
                        <div class="h5 text-left MontereyFLF mb-0 mt-4 mt-md-0">
                            <select name="id_category" disabled class="category d-block color-uno">
                                @foreach ($categories as $category)
                                <option value="{{ $category->id_category }}">{{ $category->name }}</option>
                                @endforeach
                            </select>
                            <select name="id_location" disabled class="location d-block color-dos">
                                @foreach ($locations as $location)
                                <option value="{{ $location->id_location }}">{{ $location->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </header>
                    <main>
                        <textarea name="description" class="description" disabled placeholder="Description"></textarea>
                    </main>
                </section>
            </div>
        </main>
    </form>
</section>