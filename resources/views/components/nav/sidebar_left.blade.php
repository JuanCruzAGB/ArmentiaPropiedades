<div id="menu" class="sidebar left closed push-body">
    <div class="sidebar-header">
        <div class="sidebar-title logo">
            <img src="{{asset('img/resources/logo_chico.png')}}" alt="Armentia Propiedades Logo"/>
            <h2>Menu</h2>
        </div>
        <a href="#" class="sidebar-button close-btn left">
            <i class="sidebar-icon fas fa-times"></i>
        </a>
    </div>

    <div class="sidebar-content">
        <ul class="sidebar-menu-list">
            <li><a href="/" class="sidebar-link nav-link p-0">
                Inicio
            </a></li>
            <li><a href="/propiedades" class="sidebar-link nav-link p-0">
                Propiedades
            </a></li>
            <li id="dropdown-2" class="dropdown closed">
                <a href="/panel" class="sidebar-link dropdown-title nav-link">
                    <span class="text">Panel</span>
                    <button class="dropdown-button">
                        <i class="dropdown-icon fas fa-sort-down"></i>
                    </button>
                </a>
                <ul class="dropdown-menu-list">
                    <li class="m-0">
                        <a href="/panel#users" class="sidebar-link dropdown-link nav-link p-0">
                            <i class="link-icon left fas fa-chevron-right"></i>
                            <span class="link-text">Users</span>
                        </a>
                    </li>
                    <li class="m-0">
                        <a href="/panel#new-user" class="sidebar-link dropdown-link nav-link p-0">
                            <i class="link-icon left fas fa-chevron-right"></i>
                            <span class="link-text">New User</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li><a href="/cerrar-sesion" class="sidebar-link nav-link p-0">
                <i class="link-icon left fas fa-sign-out-alt"></i>
                <span class="link-text">Cerrar Sesión</span>
            </a></li>
        </ul>
    </div>
</div>