import { NavMenu as NavMenuJS} from '../../submodules/NavMenuJS/js/NavMenu.js';
import { Dropdown as DropdownJS } from "../../submodules/DropdownJS/js/Dropdown.js";

document.addEventListener('DOMContentLoaded', (e) => {
    if(document.querySelector('#nav-filter')){
        let navmenu = new NavMenuJS({
            id: 'nav-filter',
            sidebar: {
                id: ['menu', 'filters'],
                position: ['left', 'right'],
            }, dropdown:{
                //
            },
        }, {
            fixed: true,
            current: false,
        });
    }
});