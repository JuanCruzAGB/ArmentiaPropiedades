<div id="menu" class="sidebar left closed push-body">
    <div class="sidebar-header">
        <div class="sidebar-title logo">
            <img src="{{asset('img/resources/logo_small.png')}}" alt="Armentia Propiedades Logo"/>
            <h2>Menu</h2>
        </div>
        <a href="#" class="sidebar-button close-btn left">
            <i class="sidebar-icon fas fa-times"></i>
        </a>
    </div>

    <div class="sidebar-content">
        <ul class="sidebar-menu-list">
            <li><a href="/inicio" class="sidebar-link nav-link p-0">
                Inicio
            </a></li>
            <li><a href="/propiedades" class="sidebar-link nav-link p-0">
                Propiedades
            </a></li>
            @if (Auth::check())
                <li><a href="/panel" class="sidebar-link nav-link p-0">
                    Panel
                </a></li>
                <li><a href="/cerrar-sesion" class="sidebar-link nav-link p-0">
                    <i class="link-icon left fas fa-sign-out-alt"></i>
                    <span class="link-text">Cerrar Sesión</span>
                </a></li>
            @endif
        </ul>
    </div>
</div>