<nav id="nav-global" class="nav-menu">
    <div class="nav-row">
        <a href="#menu" class="sidebar-button open-btn left">
            <i class="sidebar-icon fas fa-bars"></i>
        </a>
        
        <a href="/inicio" class="nav-title logo">
            <picture>
                <source srcset="{{asset('img/resources/logo_regular.png')}}"
                    media="(min-width: 768px)"/>
                <img src="{{asset('img/resources/logo_small.png')}}" 
                    alt="Armentia Propiedades Logo"/>
            </picture>
            <h1>Armentia Propiedades</h1>
        </a>
    </div>

    <div class="nav-row">
        <ul class="nav-menu-list">
            <li><a href="/inicio" class="nav-link p-0">
                Inicio
            </a></li>
            <li><a href="/propiedades" class="nav-link p-0">
                Propiedades
            </a></li>
            @if (Auth::check())
                <li><a href="/panel" class="nav-link p-0">
                    Panel
                </a></li>
                <li><a href="/cerrar-sesion" class="nav-link p-0">
                    <i class="link-icon left fas fa-sign-out-alt"></i>
                    <span class="link-text">Cerrar Sesión</span>
                </a></li>
            @endif
        </ul>
    </div>

    @component('components.nav.sidebar_left')
    @endcomponent
</nav>