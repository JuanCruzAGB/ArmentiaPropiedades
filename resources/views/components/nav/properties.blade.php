<nav id="nav-1" data-current="propiedades" class="nav-menu">
    <div class="nav-row">
        <a href="#" class="sidebar-button open-btn left">
            <i class="sidebar-icon fas fa-bars"></i>
        </a>
        
        <a href="/" class="nav-title logo">
            <picture>
                <source srcset="{{asset('img/resources/logo_medio.png')}}"
                    media="(min-width: 768px)"/>
                <img src="{{asset('img/resources/logo_chico.png')}}" 
                    alt="Armentia Propiedades Logo"/>
            </picture>
            <h1>Armentia Propiedades</h1>
        </a>
        
        <a href="#" class="sidebar-button open-btn right">
            <i class="sidebar-icon fas fa-filter"></i>
        </a>
    </div>

    <div class="nav-row">
        <ul class="nav-menu-list">
            <li><a href="/" class="nav-link">
                Inicio
            </a></li>
            <li><a href="/propiedades" class="nav-link">
                Propiedades
            </a></li>
            <li class="dropdown closed">
                <a href="/panel" class="nav-link">
                    Panel
                    <button class="dropdown-button">
                        <i class="dropdown-icon fas fa-sort-down"></i>
                    </button>
                </a>
                <ul class="dropdown-menu-list">
                    <li class="m-0"><a href="/panel#users" class="dropdown-link"><i class="link-icon fas fa-chevron-right"></i>Users</a></li>
                    <li class="m-0"><a href="/panel#new-user" class="dropdown-link"><i class="link-icon fas fa-chevron-right"></i>New User</a></li>
                </ul>
            </li>
            <li><a href="/cerrar-sesion" class="nav-link">
                <i class="link-icon left fas fa-sign-out-alt"></i>
                <span class="link-text">Cerrar Sesión</span>
            </a></li>
        </ul>
    </div>

    @component('components.nav.sidebar_left')
    @endcomponent
    @component('components.nav.sidebar_right')
    @endcomponent
</nav>