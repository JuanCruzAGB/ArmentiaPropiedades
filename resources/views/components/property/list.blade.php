@if(Route::current()->getName() === 'web.home')
    <ul class="cards no-wrap row">
@else
    <ul class="cards row">
@endif
    @component('components.property.info')
    @endcomponent
</ul>

@if(Route::current()->getName() === 'property.list')
    <a href="/propiedades" class="btn-uno d-inline-block p-3">
        <span>Cargar más</span>
    </a>
@endif