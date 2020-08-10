import {NavMenu as NavMenuJS} from '/submodules/NavmenuJS/js/NavMenu.js';
import {Dropdown as DropdownJS} from '/submodules/DropdownJS/js/Dropdown.js';

document.addEventListener('DOMContentLoaded', (e) => {
    let navmenu = new NavMenuJS({
        id: 'nav-1',
        sidebar: {
            id: ['menu'],
            position: ['left'],
        }, dropdown:{
            //
        },
    }, {
        fixed: false,
        current: false,
    });

    let dropdowns = [];
    let dropdowns_html = document.querySelectorAll('.dropdown');
    for(const html of dropdowns_html){
        dropdowns.push(new DropdownJS({
            id: html.id,
        }, {
            open: false,
        }));
    }
});