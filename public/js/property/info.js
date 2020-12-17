import { Gallery as GalleryJS } from "../../submodules/GalleryJS/js/Gallery.js";

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
});