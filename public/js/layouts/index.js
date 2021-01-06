// ? External repository
import { NavMenu as NavMenuJS} from '../../submodules/NavMenuJS/js/NavMenu.js';
import { Dropdown as DropdownJS } from "../../submodules/DropdownJS/js/Dropdown.js";
import { TabMenu as TabMenuJS } from "../../submodules/TabMenuJS/js/TabMenu.js";
import { URLServiceProvider as URL } from "../../submodules/ProvidersJS/URLServiceProvider.js";

// ? Local repository
import { changeSection } from "../web/panel.js";

document.addEventListener('DOMContentLoaded', (e) => {
    if(document.querySelector('#nav-global')){
        let navmenu = new NavMenuJS({
            id: 'nav-global',
            sidebar: {
                id: ['menu'],
                position: ['left'],
            }, dropdown:{
                //
            },
        }, {
            fixed: true,
            hideOnScrollDown: true,
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
            }, {
                function: changeSection,
                params: {
                    //
            }});
            if (URL.findHashParameter()) {
                let opened = [URL.findHashParameter()];
                tabmenu.open(opened);
            } else if (document.querySelectorAll('.tab-menu .opened').length) {
                let opened = [];
                for (const content of document.querySelectorAll('.tab-menu .opened')) {
                    opened.push(content.id);
                }

                tabmenu.open(opened);
            }
            tabmenus.push(tabmenu);
        }
    }
});