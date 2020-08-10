<nav id="nav-1" class="nav-menu">
    <div class="nav-row">
        <a href="#menu" class="sidebar-button open-btn left sidebar-button">
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
    </div>

    <div class="nav-row">
        <ul class="nav-menu-list">
            <li><a href="/" class="nav-link p-0">
                Inicio
            </a></li>
            <li><a href="/propiedades" class="nav-link p-0">
                Propiedades
            </a></li>
            <li id="dropdown-1" class="dropdown closed">
                <a href="/panel" class="dropdown-title nav-link p-0">
                    <span class="text">Panel</span>
                    <button class="dropdown-button">
                        <i class="dropdown-icon fas fa-sort-down"></i>
                    </button>
                </a>
                <ul class="dropdown-menu-list">
                    <li class="m-0">
                        <a href="/panel#users" class="nav-link p-0">
                            <i class="link-icon left fas fa-chevron-right"></i>
                            <span class="link-text">Users</span>
                        </a>
                    </li>
                    <li class="m-0">
                        <a href="/panel#new-user" class="nav-link p-0">
                            <i class="link-icon left fas fa-chevron-right"></i>
                            <span class="link-text">New User</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li><a href="/cerrar-sesion" class="nav-link p-0">
                <i class="link-icon left fas fa-sign-out-alt"></i>
                <span class="link-text">Cerrar Sesión</span>
            </a></li>
        </ul>
    </div>

    @component('components.nav.sidebar_left')
    @endcomponent
</nav>