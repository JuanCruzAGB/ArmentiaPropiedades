// ? External repository
import { Gallery as GalleryJS } from "../../submodules/GalleryJS/js/Gallery.js";
import { Validation as ValidationJS } from "../../submodules/ValidationJS/js/Validation.js";

function selectImage(params) {
    document.querySelector(`#property-gallery.gallery .selected:not(.gallery-button)`).href = params.gallery.getImage().getProperties('source');
}

document.addEventListener('DOMContentLoaded', function(e){
    let gallery = new GalleryJS({
        id: 'property-gallery',
        selected: 0,
    }, {}, {
        function: selectImage,
        params: {
            //
        }
    });

    let Validation = new ValidationJS({
        id: 'query-form',
    }, {}, validation.rules, validation.messages);
});