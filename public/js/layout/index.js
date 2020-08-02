import {NavMenu as NavMenuJS} from '/submodules/NavmenuJS/js/NavMenuJS.js';
import {Dropdown as DropdownJS} from '/submodules/DropdownJS/js/DropdownJS.js';

document.addEventListener('DOMContentLoaded', (e) => {
    let navmenu = new NavMenuJS();

    let dropdowns = [];
    let dropdowns_html = document.querySelectorAll('.dropdown-js');
    let i = 0;
    for(const html of dropdowns_html){
        let dropdown_properties = {};
        dropdown_properties.html = html;
        dropdown_properties.btn = document.querySelectorAll('.dropdown-js .dropdown-btn')[i];
        dropdown_properties.menu = html.children[1];
        dropdown_properties.fixed = false;
        // if(window.location.href.split('?').length > 1){
        //     dropdown_properties.open = window.location.href.split('#')[1];
        // }
        dropdowns.push(new DropdownJS(dropdown_properties));
        i++;
    }
});