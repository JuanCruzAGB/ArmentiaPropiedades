@if(Route::current()->getName() === 'web.home')
    <li class="property card col-7 col-md-5 col-xl-3 col-md-3">
@else
    <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
@endif
    <a href="#" class="card-body row p-0">
        <figure class="card-image col-12 mb-0 p-0">
            <img src="{{asset('storage/property/01.jpg')}}" alt="Property image">
        </figure>
        <header class="card-title col-12 m-0 p-0">
            <h3 class="h6 text-center mb-0 p-3">Propiedad 1</h3>
        </header>
        <div class="card-icon col-12">
            <i class="icon fas fa-sign-in-alt"></i>
        </div>
    </a>
</li>
@if(Route::current()->getName() === 'web.home')
    <li class="property card col-7 col-md-5 col-xl-3 col-md-3">
@else
    <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
@endif
    <a href="#" class="card-body row p-0">
        <figure class="card-image col-12 mb-0 p-0">
            <img src="{{asset('storage/property/01.jpg')}}" alt="Property image">
        </figure>
        <header class="card-title col-12 m-0 p-0">
            <h3 class="h6 text-center mb-0 p-3">Propiedad 2</h3>
        </header>
        <div class="card-icon col-12">
            <i class="icon fas fa-sign-in-alt"></i>
        </div>
    </a>
</li>
@if(Route::current()->getName() === 'web.home')
    <li class="property card col-7 col-md-5 col-xl-3 col-md-3">
@else
    <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
@endif
    <a href="#" class="card-body row p-0">
        <figure class="card-image col-12 mb-0 p-0">
            <img src="{{asset('storage/property/01.jpg')}}" alt="Property image">
        </figure>
        <header class="card-title col-12 m-0 p-0">
            <h3 class="h6 text-center mb-0 p-3">Propiedad 3</h3>
        </header>
        <div class="card-icon col-12">
            <i class="icon fas fa-sign-in-alt"></i>
        </div>
    </a>
</li>
@if(Route::current()->getName() === 'web.home')
    <li class="property card col-7 col-md-5 col-xl-3 col-md-3">
@else
    <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
@endif
    <a href="#" class="card-body row p-0">
        <figure class="card-image col-12 mb-0 p-0">
            <img src="{{asset('storage/property/01.jpg')}}" alt="Property image">
        </figure>
        <header class="card-title col-12 m-0 p-0">
            <h3 class="h6 text-center mb-0 p-3">Propiedad 4</h3>
        </header>
        <div class="card-icon col-12">
            <i class="icon fas fa-sign-in-alt"></i>
        </div>
    </a>
</li>
@if(Route::current()->getName() === 'property.list')
    <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
        <a href="#" class="card-body row p-0">
            <figure class="card-image col-12 mb-0 p-0">
                <img src="{{asset('storage/property/01.jpg')}}" alt="Property image">
            </figure>
            <header class="card-title col-12 m-0 p-0">
                <h3 class="h6 text-center mb-0 p-3">Propiedad 5</h3>
            </header>
            <div class="card-icon col-12">
                <i class="icon fas fa-sign-in-alt"></i>
            </div>
        </a>
    </li>
    <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
        <a href="#" class="card-body row p-0">
            <figure class="card-image col-12 mb-0 p-0">
                <img src="{{asset('storage/property/01.jpg')}}" alt="Property image">
            </figure>
            <header class="card-title col-12 m-0 p-0">
                <h3 class="h6 text-center mb-0 p-3">Propiedad 6</h3>
            </header>
            <div class="card-icon col-12">
                <i class="icon fas fa-sign-in-alt"></i>
            </div>
        </a>
    </li>
    <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
        <a href="#" class="card-body row p-0">
            <figure class="card-image col-12 mb-0 p-0">
                <img src="{{asset('storage/property/01.jpg')}}" alt="Property image">
            </figure>
            <header class="card-title col-12 m-0 p-0">
                <h3 class="h6 text-center mb-0 p-3">Propiedad 7</h3>
            </header>
            <div class="card-icon col-12">
                <i class="icon fas fa-sign-in-alt"></i>
            </div>
        </a>
    </li>
    <li class="property card col-11 col-md-5 col-xl-3 col-md-3">
        <a href="#" class="card-body row p-0">
            <figure class="card-image col-12 mb-0 p-0">
                <img src="{{asset('storage/property/01.jpg')}}" alt="Property image">
            </figure>
            <header class="card-title col-12 m-0 p-0">
                <h3 class="h6 text-center mb-0 p-3">Propiedad 8</h3>
            </header>
            <div class="card-icon col-12">
                <i class="icon fas fa-sign-in-alt"></i>
            </div>
        </a>
    </li>
@endif