import { NavMenu as NavMenuJS} from '../../submodules/NavMenuJS/js/NavMenu.js';
import { Dropdown as DropdownJS } from "../../submodules/DropdownJS/js/Dropdown.js";
import { TabMenu as TabMenuJS } from "../../submodules/TabMenuJS/js/TabMenu.js";

document.addEventListener('DOMContentLoaded', (e) => {
    if(document.querySelector('#nav-1')){
        let navmenu = new NavMenuJS({
            id: 'nav-1',
            sidebar: {
                id: ['menu'],
                position: ['left'],
            }, dropdown:{
                //
            },
        }, {
            fixed: true,
            current: false,
        });
    }
    if(document.querySelectorAll('.dropdown').length){
        let dropdowns = [];
        for (const html of document.querySelectorAll('.dropdown')) {
            dropdowns.push(new DropdownJS({
                id: html.id,
            }, {
                open: false,
            }));
        }
    }
    if(document.querySelectorAll('.tab-menu').length){
        let tabmenus = [];
        for (const html of document.querySelectorAll('.tab-menu')) {
            let tabmenu = new TabMenuJS({
                id: html.id,
            }, {
                open: false,
                active: false,
            });
            if(document.querySelectorAll('.tab-menu .opened').length){
                let opened = [], active = ((document.querySelector('.tab-menu .active')) ? document.querySelector('.tab-menu .active').href.split('#').pop() : undefined);
                for (const content of document.querySelectorAll('.tab-menu .opened')) {
                    opened.push(content.id);
                }
                tabmenu.open(opened, active);
            }
            tabmenus.push();
        }
    }
});