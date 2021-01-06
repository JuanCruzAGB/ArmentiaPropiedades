// ? External repository
import { Validation as ValidationJS } from "../../submodules/ValidationJS/js/Validation.js";

document.addEventListener('DOMContentLoaded', function(e){
    let Validation = new ValidationJS({
        id: 'contact-form',
    }, {}, validation.rules, validation.messages);
});