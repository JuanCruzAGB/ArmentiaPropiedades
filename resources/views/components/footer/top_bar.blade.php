<section class="top_bar col-12 p-3">
    <div class="row">
        <div class="d-flex justify-content-end align-items-center col-12 col-md-6 p-0 py-3 pr-xl-3">
            @if(Route::current()->getName() === 'web.home')
                <h2 class="Work-Sans h4 mb-0">¿No encontrás lo que buscás?</h2>
            @elseif(Route::current()->getName() === 'property.info')
                <h2 class="Work-Sans h4 mb-0">¿No es la que buscás?</h2>
            @endif
        </div>
        <div class="col-12 col-md-4 col-lg-3 p-0 mb-3 mb-md-0">
            <a href="/propiedades" class="btn btn-dos-transparent m-0 p-3">
                <i class="icon fas fa-chevron-right mr-2"></i>
                <span>Ver propiedades</span>
            </a>
        </div>
    </div>
</section>