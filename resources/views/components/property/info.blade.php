@if (count($properties))
    @foreach ($properties as $property)
        @if(Route::current()->getName() === 'web.home')
            <li class="property card col-7 col-md-5 col-xl-3 col-md-3">
        @else
            <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
        @endif
            <a href="/propiedad/{{ $property->slug }}/detalles" class="card-body row p-0">
                <figure class="card-image col-12 mb-0 p-0">
                    <img src="{{asset('storage/property/1/01.jpg')}}" alt="{{ $property->name }}">
                </figure>
                <header class="card-title col-12 m-0 p-0">
                    <h3 class="h6 text-center mb-0 p-3">{{ $property->name }}</h3>
                </header>
                <div class="card-icon col-12">
                    <i class="icon fas fa-sign-in-alt"></i>
                </div>
            </a>
        </li>
    @endforeach
@else
    <li class="property card col-12 col-lg-8 ml-3">
        <span>No contamos con propiedades aún</span>
    </li>
@endif